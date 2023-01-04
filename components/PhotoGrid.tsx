import Head from "next/head";
import * as NextImage from "next/image";

import { useEffect, useState } from "react";

import { Gallery, Image as GalleryImage } from "react-grid-gallery";

function ImageComponent(props: any) {
  return (
    <div className="relative w-full h-full">
      <a className="relative w-full h-full" href={props.item.href}>
        <NextImage.default
          alt={props.imageProps.alt}
          key={props.imageProps.key}
          style={props.imageProps.style}
          src={props.imageProps.src}
          title={props.imageProps.title}
          width={props.imageProps.width}
          height={props.imageProps.height}
          referrerPolicy="no-referrer"
        />
      </a>
    </div>
  );
}

export default function PhotoGrid(props: { album: string }) {
  let galType: GalleryImage[] = [];
  const [images, setImages] = useState(galType);

  function getMeta(url: string) {
    return new Promise((resolve, reject) => {
      let img: HTMLImageElement = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject();
      img.src = url;
    });
  }

  const fetchPhotos = async (galleryID: string) => {
    const response = await fetch("/api/" + galleryID);
    const data = await response.json();
    console.log(data);
    let finalImages: GalleryImage[] = [];
    for (let index = 0; index < data.length; index++) {
      let pulledImage: any = await getMeta(data[index]);
      finalImages.push({
        src: data[index],
        width: pulledImage.width || 100,
        height: pulledImage.height || 100,
      });
    }
    setImages(finalImages);
    console.log(finalImages);
    return data;
  };

  useEffect(() => {
    console.log(props.album);
    const data: any = fetchPhotos(props.album);
  });

  return images.length === 0 ? (
    <div className="flex flex-row text-center w-full h-screen justify-center justify-items-center">
      <div className="flex flex-col text-center justify-items-center justify-center w-full h-screen ">
        loading..
      </div>
    </div>
  ) : (
    <>
      <Head>
        <title>Nathan Davenport&apos;s Portfolio</title>
        <meta
          name="description"
          content="Nathan Davenport's showcase of photography and experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-screen transition-all">
          <Gallery
            images={images}
            enableImageSelection={false}
            rowHeight={300}
            /* thumbnailImageComponent={ImageComponent} */
            /* thumbnailStyle={{}} */
          />
        </div>
      </main>
    </>
  );
}

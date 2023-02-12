import Head from "next/head";
import Image from "next/image";

import { useEffect, useState } from "react";

import { Gallery, Image as GalleryImage } from "react-grid-gallery";

function ImageComponent(props: any) {
  return (
    <div className="relative w-full h-full">
      <Image
        {...props.imageProps}
        width={200}
        height={200}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default function PhotoGrid(props: { album: string }) {
  let galType: GalleryImage[] = [];
  const [images, setImages] = useState(galType);

  const fetchPhotos = async (galleryID: string) => {
    const response = await fetch("/api/" + galleryID);
    const data: GalleryImage[] = await response.json();
    setImages(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPhotos(props.album);
  }, []);

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
            rowHeight={500}
            thumbnailImageComponent={ImageComponent}
            /* thumbnailStyle={{}} */
          />
        </div>
      </main>
    </>
  );
}

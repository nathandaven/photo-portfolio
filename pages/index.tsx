import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import PlantsImage from "../public/resources/plants.jpg";
import { useEffect, useState } from "react";
import GooglePhoto from "../components/GooglePhoto";
import Menu from "../components/Menu";
import { Image as GalleryImage } from "react-grid-gallery";

const inter = Inter({ subsets: ["latin"] });

/* thought for caching: https://vercel.com/docs/concepts/functions/serverless-functions/edge-caching */

export default function Home() {
  const [sidebar, toggleSidebar] = useState("");
  const [data, setData] = useState();
  const [heroPhoto, setHeroPhoto] = useState<GalleryImage>();

  const setSidebar = function (sidebarStyle: boolean) {
    let tag = "";
    if (sidebarStyle) {
      tag = "lg:pl-96 sm:pl-72 sm:pt-4 pt-96";
    }
    toggleSidebar(tag);
  };

  const fetchPhotos = async (galleryID: string) => {
    console.log("fetching images from https://photos.app.goo.gl/" + galleryID);
    const response = await fetch("/api/" + galleryID);
    const data = await response.json();
    return data;
  };

  const randomizeHeroPhoto = (data: any) => {
    const newHero: any = data[Math.floor(Math.random() * data.length)];
    return newHero;
  };

  useEffect(() => {
    fetchPhotos("jaua16trD4AJBg9m6").then((data) => {
      setHeroPhoto(randomizeHeroPhoto(data));
      setData(data);
    });
  }, []);

  return (
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
        {/* Wrapper for background image */}
        <div
          className={
            "absolute flex flex-row justify-center h-screen h-screen-ios w-screen z-0 p-4 transition-all " +
            sidebar
          }
        >
          <div className="relative w-full h-full">
            {heroPhoto ? (
              <Image
                className="object-cover border-2 border-black dark:border-white"
                src={`${heroPhoto.src}=w1920`}
                fill
                priority
                placeholder="blur"
                blurDataURL={`${heroPhoto.src}`}
                alt="Full screen image"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="object-cover w-full h-full border-2 border-black dark:border-white"></div>
            )}
          </div>
        </div>

        <Menu />

        {/* Wrapper for bottom elements */}
        <div className=" p-8 z-10 absolute flex flex-col justify-end h-screen h-screen-ios">
          {/* TODO: links for social media */}
          <ul className="text-black dark:text-white mt-6 underline italic text-md md:text-lg lg:text-lg transition-all">
            <li>
              <a
                className="h-100 bg-white dark:bg-black hover:font-bold cursor-pointer"
                onClick={() => setHeroPhoto(randomizeHeroPhoto(data))}
              >
                New Photo
              </a>
            </li>
            <li>
              <a
                className="h-100 bg-white dark:bg-black hover:font-bold cursor-pointer"
                onClick={() => setSidebar(!sidebar)}
              >
                Expand
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

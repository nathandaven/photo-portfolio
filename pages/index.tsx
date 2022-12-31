import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import PlantsImage from "../public/resources/plants.jpg";
import { useEffect, useState } from "react";
import GooglePhoto from "../components/GooglePhoto";

const inter = Inter({ subsets: ["latin"] });

/* thought for caching: https://vercel.com/docs/concepts/functions/serverless-functions/edge-caching */

export default function Home() {
  const fetchPhotos = async (galleryID: string) => {
    const response = await fetch("/api/" + galleryID);
    const data = await response.json();
    console.log(data);

    /* const data: any = fetchPhotos("TzQSCHMmkXxycPxi9"); */
    const randPhoto: any = data[Math.floor(Math.random() * data.length)];
    console.log(randPhoto);
    setHeroPhoto(randPhoto);
    return data;
  };

  const [sidebar, toggleSidebar] = useState("");

  const setSidebar = function (sidebarStyle: boolean) {
    let tag = "";
    if (sidebarStyle) {
      tag = "lg:pl-96 sm:pl-72 sm:pt-4 pt-96";
    }
    toggleSidebar(tag);
  };

  const [heroPhoto, setHeroPhoto] = useState("");

  useEffect(() => {
    fetchPhotos("TzQSCHMmkXxycPxi9");
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
            "absolute flex flex-row justify-center h-screen w-screen z-0 p-4 transition-all " +
            sidebar
          }
        >
          <img
            className="object-cover w-full h-full border-2 border-black dark:border-white"
            src={heroPhoto ? `${heroPhoto}=w1920` : ""}
            fill
            sizes="100vw"
            alt="Full screen image"
          />
          {/* <GooglePhoto src="https://lh3.googleusercontent.com/GkrqvpKaWjEDCz14ZiT2NKy3Nq6TWeO4j7eHTgUz2_h_tSlcdSRtMrnjvRsnu-gzATBAaYqMQMOEHqi2zm7jnqeUphsW3gWdm9fgRadNkbQXss9vtCuyXqRjqWw-W2QWekyQlQ1HIlk" /> */}
        </div>

        {/* Wrapper for homepage elements */}
        <div className=" p-8 z-10 absolute">
          <h1 className="text-black dark:text-white font-medium text-3xl md:text-4xl lg:text-5xl transition-all">
            <span className="bg-white dark:bg-black">NATHAN</span>
          </h1>
          <h1 className="text-black  dark:text-white  font-medium text-3xl md:text-4xl lg:text-5xl transition-all">
            <span className="bg-white dark:bg-black">DAVENPORT</span>
          </h1>

          <ul className="text-black dark:text-white mt-6 underline italic text-md md:text-lg lg:text-lg transition-all">
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                Selections
              </a>
            </li>

            {/* Album selector */}
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                Portraits
              </a>
            </li>
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                Live Music
              </a>
            </li>
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                Misc
              </a>
            </li>
          </ul>

          {/* Site links */}
          <ul className="text-black dark:text-white mt-4 underline italic text-md md:text-lg lg:text-lg transition-all">
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                Albums
              </a>
            </li>
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="h-100 bg-white dark:bg-black hover:font-bold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Wrapper for bottom elements */}
        <div className="p-8 z-10 absolute bottom-0">
          {/* TODO: links for social media */}
          <div className="pt-4 ">
            <a
              className="underline cursor-pointer bg-white dark:bg-black"
              onClick={() => setSidebar(!sidebar)}
            >
              Expand
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

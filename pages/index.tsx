import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import PlantsImage from "../public/resources/plants.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetchPhotos = async (galleryID: string) => {
    const response = await fetch("/api/" + galleryID);
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Nathan Davenport's Portfolio</title>
        <meta
          name="description"
          content="Nathan Davenport's showcase of photography and experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="absolute flex flex-col justify-center h-screen w-screen z-0">
          <Image
            className="w-auto h-auto align-middle p-4 text-center max-h-screen"
            src={PlantsImage}
            alt=""
          />
        </div>
        <div className=" p-8 z-10 absolute">
          <h1 className="text-black bg-white font-medium text-4xl">
            Nathan Davenport
          </h1>
          <ul className="text-black mt-4 underline italic">
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                Selections
              </a>
            </li>
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                Portraits
              </a>
            </li>
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                Live Music
              </a>
            </li>
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                Misc
              </a>
            </li>
          </ul>

          <ul className="text-black mt-4 underline italic">
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                Albums
              </a>
            </li>
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                About
              </a>
            </li>
            <li>
              <a href="" className="h-100 bg-white  hover:font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

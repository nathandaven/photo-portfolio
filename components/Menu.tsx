import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
  return (
    <>
      {/* Wrapper for homepage elements */}
      <div className=" p-8 z-20 sm:fixed top-0 left-0 ">
        <Link href="/">
          <h1 className="text-black dark:text-white font-medium text-3xl md:text-4xl lg:text-5xl transition-all">
            <span className="bg-white dark:bg-black">NATHAN</span>
          </h1>
          <h1 className="text-black  dark:text-white  font-medium text-3xl md:text-4xl lg:text-5xl transition-all">
            <span className="bg-white dark:bg-black">DAVENPORT</span>
          </h1>
        </Link>

        <ul className="text-black dark:text-white mt-6 underline italic text-md md:text-lg lg:text-lg transition-all">
          <li>
            <Link
              href="/TzQSCHMmkXxycPxi9"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              Selections
            </Link>
          </li>

          {/* Album selector */}
          <li>
            <Link
              href="/U324c2yCxkgwN29Z6"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              Portraits
            </Link>
          </li>
          <li>
            <Link
              href="/xfjX2YRWVFd3tWfs7"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              Live Music
            </Link>
          </li>
          <li>
            <Link
              href="/jaua16trD4AJBg9m6"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              Misc
            </Link>
          </li>
        </ul>

        {/* Site links */}
        <ul className="text-black dark:text-white mt-4 underline italic text-md md:text-lg lg:text-lg transition-all">
          <li>
            <Link
              href="https://nathandaven.com"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="https://nathandaven.com"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              Albums
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://nathandaven.com"
              className="h-100 bg-white dark:bg-black hover:font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

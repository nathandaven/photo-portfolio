import { GoogleAnalytics } from "@next/third-parties/google";
import { Meta } from "../components/Meta";

export default function Landing() {
  return (
    <>
      <Meta />
      <main className="m-5 p-5 text-center h-100">
        <h1 className="pb-5 text-black dark:text-white font-medium text-3xl md:text-3xl lg:text-4xl transition-all text-center h-100">
          hi!
        </h1>
        <p>
          <b>nathan davenport</b>&apos;s website is undergoing a refactor.
        </p>
        <p>for now, find me here:</p>

        <ul className="uno pl-5 pt-5 justify-center w-full ">
          <li className=" text-md list-item italic underline">
            <a
              className="hover:font-bold"
              href="https://instagram.com/nathandaven"
            >
              instagram
            </a>
          </li>
          <li className=" text-md list-item italic underline">
            <a
              className="hover:font-bold"
              href="https://youtube.com/@nathandaven"
            >
              youtube
            </a>
          </li>
          <li className=" text-md list-item italic underline">
            <a
              className="hover:font-bold"
              href="https://twitter.com/nathandaven"
            >
              twitter
            </a>
          </li>
          <li className=" text-md list-item italic underline">
            <a
              className="hover:font-bold"
              href="https://linkedin.com/in/nathandaven"
            >
              linkedin
            </a>
          </li>
          <li className=" text-md list-item italic underline">
            <a
              className="hover:font-bold"
              href="https://tiktok.com/@nathandaven"
            >
              tiktok
            </a>
          </li>
          <li className=" text-md list-item italic underline">
            <a
              className="hover:font-bold"
              href="https://github.com/nathandaven"
            >
              github
            </a>
          </li>
        </ul>

        <p className="pt-5">or, shoot me an email:</p>
        <p>
          <a
            className="underline italic bold hover:font-bold"
            href="mailto:nathan@nathandaven.com"
          >
            nathan@nathandaven.com
          </a>
        </p>
      </main>
      <GoogleAnalytics gaId="G-X1XTCSK8DT" />
    </>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import { Meta } from "../components/Meta";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

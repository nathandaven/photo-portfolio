import Head from "next/head";
import { useRouter } from "next/router";

import PhotoGrid from "../components/PhotoGrid";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";

export default function Album() {
  const router = useRouter();
  const album = router.query.album as string;

  const [query, setQuery] = useState<any>("");
  useEffect(() => {
    if (router.isReady) {
      // Code using query
      setQuery(router.query.album?.toString());
    }
  }, [router.isReady, router.query, query]);

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
      {/* <Menu></Menu> */}
      {query !== "" ? <PhotoGrid album={query} /> : <></>}
    </>
  );
}

import Head from "next/head";
import { useRouter } from "next/router";

//import PhotoGrid from "../components/PhotoGrid";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";

import { GooglePhotoList } from "../components/GooglePhotoList";
import { View } from "../components/GooglePhotoList";
import { Page } from "../components/Page";

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
      <Page expand={false}>
        {/* <div className="container mx-auto px-4 xl:px-20 min-h-screen flex justify-around items-baseline text-center flex-col "> */}
        <div className="/* min-h-screen w-full */">
          {query ? (
            <GooglePhotoList
              galleryID={query}
              view={View.LIST}
              cropPreviews={false}
              order={false}
            ></GooglePhotoList>
          ) : (
            <div>loading...</div>
          )}
        </div>
        {/* </div> */}
      </Page>
    </>
  );
}

// old way
{
  /* <div className="container mx-auto px-4 md:px-10 lg:px-40 xl:px-60 2xl:px-80 min-h-screen flex justify-around items-baseline text-center flex-col transition-all"></div> */
}

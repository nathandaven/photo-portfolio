import { useEffect, useState } from "react";
import Image from "next/image";

export default function GooglePhoto(src: string) {
  return (
    <>
      <img
        className="object-cover w-full h-full border-2 border-black dark:border-white"
        src={`${src}=w2400`}
        alt="Full screen image"
      />
    </>
  );
}

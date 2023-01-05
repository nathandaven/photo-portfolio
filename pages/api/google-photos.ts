import axios from "axios";
import { Image as GalleryImage } from "react-grid-gallery";
import probe from "probe-image-size";

async function extractPhotos(content: string) {
  const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;

  const links = new Set();
  let match;
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }

  const srcArray: string[] = Array.from(links) as string[];

  let response: GalleryImage[] = [];

  for (let i = 0; i < srcArray.length; i++) {
    const size = await probe(srcArray[i]);

    response.push({
      src: srcArray[i] || "",
      width: size.width || 0,
      height: size.height || 0,
    });
  }
  //console.log(response);
  return Array.from(response);
}

export default async function getAlbum(id: any) {
  console.log(id);
  const response = await axios.get(`https://photos.app.goo.gl/${id}`);

  return extractPhotos(response.data);
}

import axios from "axios";

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;

function extractPhotos(content: any) {
  const links = new Set();
  let match;
  while ((match = regex.exec(content))) {
    links.add(match[1]);
  }
  return Array.from(links);
}

export default async function getAlbum(id: any) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`);
  //const response = await fetch(`https://photos.app.goo.gl/${id}`);
  return extractPhotos(response.data);
}

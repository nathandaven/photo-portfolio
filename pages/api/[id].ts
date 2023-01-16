// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getAlbum from "./google-photos";
import { readFileSync, existsSync, writeFileSync } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  try {
    const path = "public/album-data/" + req.query.id + ".json";
    if (!existsSync(path)) {
      console.log("pulling from google photos...");
      const data = JSON.stringify(await getAlbum(req.query.id));
      writeFileSync(path, data);
    }

    console.log("reading cached file: " + path);
    res.status(200).json(JSON.parse(readFileSync(path, "utf8")));

    //const results = await getAlbum(req.query.id);
    //res.status(200).json(results);
  } catch (e) {
    res.status(500);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getAlbum from "./google-photos";
import { readFileSync, existsSync, writeFileSync } from "fs";
import path from "path";

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
    const albumPath = path.resolve(
      "public/album-data/" + req.query.id + ".json"
    );
    if (!existsSync(albumPath)) {
      console.log("pulling from google photos...");
      const data = JSON.stringify(await getAlbum(req.query.id));
      writeFileSync(albumPath, data);
    }

    console.log("reading cached file: " + albumPath);
    res.status(200).json(JSON.parse(readFileSync(albumPath, "utf8")));
  } catch (e) {
    // res.json(e);
    res.status(500);
    // res.end();
  }
}

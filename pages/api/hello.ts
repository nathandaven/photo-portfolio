// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getAlbum from "./google-photos";

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
    const results = await getAlbum("jaua16trD4AJBg9m6");
    //console.log(results);
    res.status(200).json({ results: results });
  } catch (e) {
    res.status(500);
  }
  /* res.status(200).json({ name: "John Doe" }); */
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function getUser(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([{ name: "John Doe" }, { name: "Drizzy" }]);
}

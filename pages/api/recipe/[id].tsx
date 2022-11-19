// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  byId: any;
  method: any;
};

export default function getRecipeById(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ byId: req.query.id, method: req.method });
}

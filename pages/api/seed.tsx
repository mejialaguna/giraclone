import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../dataBase";

interface Data {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "you dont have access" });
  }
  await db.connect();

  await db.disconnect();

  res.status(200).json({ message: "all good" });
}

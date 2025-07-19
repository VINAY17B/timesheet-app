// pages/api/timesheets/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { mockTimesheets } from "../../../lib/timesheets";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(mockTimesheets);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

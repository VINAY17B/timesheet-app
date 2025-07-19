// pages/api/timesheets/[week].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockTimesheets } from '../../../lib/timesheets'; 
import { Timesheet } from '../../../types/timesheet'; 

export default function handler(req: NextApiRequest, res: NextApiResponse<Timesheet | { message: string }>) {
  const { week } = req.query; 

  if (typeof week !== 'string') {
    return res.status(400).json({ message: 'Invalid week parameter' });
  }

  // Find the specific timesheet data for the requested week
  const foundTimesheet = mockTimesheets.find(ts => ts.week === parseInt(week));

  if (foundTimesheet) {
    res.status(200).json(foundTimesheet);
  } else {
    res.status(404).json({ message: `Timesheet for week ${week} not found` });
  }
}
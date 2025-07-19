// types/timesheet.ts

export type TimesheetEntry = {
  id: number;
  date: string;
  task: string;
  project: string;
  hours: number;
};

export type Timesheet = {
  week: number;
  date: string;
  status: "COMPLETED" | "PENDING";
  entries: TimesheetEntry[];
};

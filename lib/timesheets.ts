// lib/timesheets.ts
import { Timesheet } from "../types/timesheet";

// Define the MockUser interface
interface MockUser {
  id: string;
  name: string;
  email: string;
  password: string; 
}


export const mockUsers: MockUser[] = [
  {
    id: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // <--- USE THIS EMAIL AND PASSWORD TO LOGIN
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'securepass',
  },
  // Add more mock users as needed
];

// existing mockTimesheets data
export const mockTimesheets = [
  {
    week: 1,
    date: "1 - 5 January, 2024",
    status: "COMPLETED",
    entries: [
      { id: 1, date: "Jan 1", task: "Build Login Page", project: "Internal Portal", hours: 4 },
      { id: 2, date: "Jan 2", task: "Design Dashboard", project: "Internal Portal", hours: 5 },
    ],
  },
  {
    week: 2,
    date: "8 - 12 January, 2024",
    status: "PENDING",
    entries: [
      { id: 3, date: "Jan 8", task: "Implement API Routes", project: "Internal Portal", hours: 6 },
    ],
  },
  {
    week: 3,
    date: "15 - 19 January, 2024",
    status: "INCOMPLETE",
    entries: [
        { id: 4, date: "Jan 15", task: "Review PRs", project: "Internal Portal", hours: 2 },
    ],
  },
  {
    week: 4,
    date: "22 - 26 January, 2024",
    status: "COMPLETED",
    entries: [
        { id: 5, date: "Jan 22", task: "Testing Phase", project: "Client Project", hours: 8 },
        { id: 6, date: "Jan 23", task: "Bug Fixing", project: "Client Project", hours: 7 },
    ],
  },
  {
    week: 5,
    date: "28 January - 1 February, 2024",
    status: "MISSING",
    entries: [],
  },
];
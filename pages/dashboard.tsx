// pages/dashboard.tsx
import Navbar from "@/components/ApplicationUI/Navbar";
import TimesheetTable from "@/components/Dashboard/TimesheetTable";
import { mockTimesheets } from "@/lib/timesheets";

export default function Dashboard() {
  const timesheets = mockTimesheets;

  return (
    <div className="min-h-screen bg-gray-100"> {/* Light grey background for the whole page */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="max-w-[1280px] mx-auto mt-[95px] px-4"> 
       
        <TimesheetTable timesheets={timesheets} />
      </main>

      <footer className="text-center text-sm text-gray-400 py-4 mt-8">
        &copy; 2024 tentwenty. All rights reserved.
      </footer>
    </div>
  );
}
// pages/dashboard/[week].tsx
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Timesheet } from '../../types/timesheet';
import Navbar from '../../components/ApplicationUI/Navbar';
import TimesheetWeekView from '../../components/Dashboard/TimesheetWeekView';

// Define your fetcher function (you might have this in utils/api.ts)
const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    
    // @ts-expect-error Non-standard error property info
    error.info = res.statusText;
    // @ts-expect-error Non-standard error property status
    error.status = res.status;
    throw error;
  }
  return res.json();
});

export default function WeeklyTimesheetPage() {
  const router = useRouter();
  const { week } = router.query;

  
  const { data, error } = useSWR<Timesheet>(router.isReady && week ? `/api/timesheets/${week}` : null, fetcher);

  // Show loading state while router is not ready OR data is not yet loaded
  if (!router.isReady || !data) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">Loading timesheet...</div>
      </>
    );
  }

  // Handle error state if fetching failed
  if (error) {
    const errorMessage = error.status === 404 ? `Timesheet for week ${week} not found.` : `Failed to load timesheet: ${error.message}`;
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen text-red-500">{errorMessage}</div>
      </>
    );
  }

  // Once data is loaded and router is ready, render the TimesheetWeekView
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <TimesheetWeekView timesheet={data} />
      </main>
      <footer className="text-center text-sm text-gray-400 py-4 mt-8">
        &copy; 2024 tentwenty. All rights reserved.
      </footer>
    </div>
  );
}
// components/Dashboard/TimesheetWeekView.tsx
import { Timesheet, TimesheetEntry } from '../../types/timesheet'; // Ensure TimesheetEntry is used for types

interface TimesheetWeekViewProps {
  timesheet: Timesheet;
}

export default function TimesheetWeekView({ timesheet }: TimesheetWeekViewProps) {
  const totalHours = timesheet.entries.reduce((sum, entry) => sum + entry.hours, 0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">This week&apos;s timesheet</h2> {/* Fixed &apos; */}
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{totalHours}/40 hrs</span>
          <span className="ml-2 text-blue-600">
            {Math.round((totalHours / 40) * 100)}%
          </span>
        </div>
      </div>

      {/* THIS CONDITIONAL RENDERING BLOCK GOES INSIDE THE MAIN DIV */}
      {timesheet.entries.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No entries for this week yet.</p>
      ) : (
        <div> {/* This div wraps the mapped entries and the 'Add new task' button */}
          {timesheet.entries.map(entry => (
            <div key={entry.id} className="border-b border-gray-200 py-4 last:border-b-0">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="font-semibold text-gray-700">{entry.date}</p>
                  <p className="text-gray-600">{entry.task}</p>
                </div>
                <div className="text-right flex items-center">
                  <span className="text-gray-600 mr-4">{entry.hours} hrs</span>
                  <span className="text-blue-600 mr-4">{entry.project}</span>
                  <div className="relative group">
                    <button className="text-gray-500 hover:text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                    {/* Dropdown menu - implement with state for showing/hiding */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="w-full border-2 border-dashed border-blue-300 text-blue-600 py-3 mt-4 rounded-lg hover:bg-blue-50 transition-colors">
            + Add new task
          </button>
        </div>
      )}
    </div> // This div is the main container for the entire component
  );
}
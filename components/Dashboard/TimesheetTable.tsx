// components/Dashboard/TimesheetTable.tsx
import { Timesheet } from '../../types/timesheet';
import StatusBadge from './StatusBadge';
import Link from 'next/link';

interface TimesheetTableProps {
  timesheets: Timesheet[];
}

export default function TimesheetTable({ timesheets }: TimesheetTableProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Timesheets</h2>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Week #
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {(timesheets || []).map((timesheet) => (
            <tr key={timesheet.week} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {timesheet.week}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {timesheet.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <StatusBadge status={timesheet.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                
                {timesheet.status === 'MISSING' && (
                  <Link href={`/dashboard/${timesheet.week}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    Create
                  </Link>
                )}
                {timesheet.status === 'INCOMPLETE' && (
                  <Link href={`/dashboard/${timesheet.week}`} className="text-indigo-600 hover:text-indigo-900 transition-colors">
                    Update
                  </Link>
                )}
                {(timesheet.status === 'COMPLETED' || timesheet.status === 'PENDING') && (
                  <Link href={`/dashboard/${timesheet.week}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    View
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center text-sm text-gray-400 pt-8">
        &copy; 2024 tentwenty. All rights reserved.
      </div>
    </div>
  );
}
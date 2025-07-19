import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-gray-900">ticktock</span>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Timesheets
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">John Doe</span>
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </nav>
  );
}

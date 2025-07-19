// components/Dashboard/StatusBadge.tsx

// 1. Update the Props interface to include "PENDING"
interface Props {
  status: "COMPLETED" | "INCOMPLETE" | "MISSING" | "PENDING"; // <-- ADD "PENDING" here
}

export default function StatusBadge({ status }: Props) {
  // 2. Update the colors object to include a style for "PENDING"
  const colors = {
    COMPLETED: "bg-green-200 text-green-800",
    INCOMPLETE: "bg-yellow-200 text-yellow-800",
    MISSING: "bg-red-200 text-red-800",
    PENDING: "bg-blue-200 text-blue-800", // <-- ADD THIS LINE (or choose a different color from design)
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}
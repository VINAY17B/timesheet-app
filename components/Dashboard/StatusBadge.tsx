interface Props {
  status: "COMPLETED" | "INCOMPLETE" | "MISSING";
}

export default function StatusBadge({ status }: Props) {
  const colors = {
    COMPLETED: "bg-green-200 text-green-800",
    INCOMPLETE: "bg-yellow-200 text-yellow-800",
    MISSING: "bg-red-200 text-red-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}

interface Props {
  status: string;
}

export default function MeetingStatusBadge({
  status,
}: Props) {
  const styles = {
    SCHEDULED:
      "bg-blue-100 text-blue-700",

    COMPLETED:
      "bg-green-100 text-green-700",

    CANCELLED:
      "bg-red-100 text-red-700",

    RESCHEDULED:
      "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${
          styles[
            status as keyof typeof styles
          ] ??
          "bg-slate-100 text-slate-700"
        }
      `}
    >
      {status}
    </span>
  );
}
interface Props {
  status: string;
}

export default function TaskStatusBadge({
  status,
}: Props) {
  const styles = {
    TODO:
      "bg-slate-100 text-slate-700",

    IN_PROGRESS:
      "bg-yellow-100 text-yellow-700",

    COMPLETED:
      "bg-green-100 text-green-700",
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
        ${styles[
          status as keyof typeof styles
        ]}
      `}
    >
      {status.replace(
        "_",
        " "
      )}
    </span>
  );
}
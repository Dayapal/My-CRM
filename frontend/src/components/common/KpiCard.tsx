interface KpiCardProps {
  title: string;
  value: string | number;
}

export default function KpiCard({
  title,
  value,
}: KpiCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}
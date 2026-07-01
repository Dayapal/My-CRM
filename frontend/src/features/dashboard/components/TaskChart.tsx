import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: {
    status: string;
    count: number;
  }[];
}

export default function TaskChart({
  data,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-5">

        <h2 className="text-xl font-semibold">
          Task Progress
        </h2>

        <p className="text-sm text-slate-500">
          Tasks grouped by status
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="status"
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}
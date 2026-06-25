import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TaskChart({
  report,
}: any) {

  const data = [
    {
      name:
        "Completed",

      value:
        report.completedTasks,
    },

    {
      name:
        "Remaining",

      value:
        report.totalTasks -
        report.completedTasks,
    },
  ];

  return (
    <div
      className="
        rounded-xl
        border
        bg-white
        p-5
      "
    >
      <h2
        className="
          mb-4
          text-lg
          font-semibold
        "
      >
        Task Completion
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
          >
            {data.map(
              (
                _,
                index
              ) => (
                <Cell
                  key={
                    index
                  }
                />
              )
            )}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
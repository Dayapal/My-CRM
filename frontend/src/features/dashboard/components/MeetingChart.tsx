import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = [

  "#2563eb",

  "#10b981",

  "#ef4444",

  "#f59e0b",

];

interface Props {

  data: {

    status: string;

    count: number;

  }[];

}

export default function MeetingChart({
  data,
}: Props) {

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-semibold">

        Meetings

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            outerRadius={100}
            label
          >

            {

              data.map(
                (_, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                        COLORS.length
                      ]
                    }
                  />

                )
              )

            }

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}
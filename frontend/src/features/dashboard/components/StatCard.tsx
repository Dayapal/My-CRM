import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import type { ReactNode } from "react";
interface StatCardProps {
  title: string;

  value: number | string;

  icon: ReactNode;

  color?: string;

  change?: number;

  description?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color = "bg-blue-500",
  change,
  description,
}: StatCardProps) {
  const isPositive =
    (change ?? 0) >= 0;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Background Glow */}

      <div
        className={`
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          opacity-10
          blur-2xl
          ${color}
        `}
      />

      <div className="relative flex items-start justify-between">

        <div>

          <p
            className="
              text-sm
              font-medium
              text-slate-500
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            {value}
          </h2>

          {description && (
            <p
              className="
                mt-2
                text-sm
                text-slate-500
              "
            >
              {description}
            </p>
          )}

        </div>

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            text-white
            shadow-lg
            ${color}
          `}
        >
          {icon}
        </div>

      </div>

      {change !== undefined && (

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
          "
        >

          <span
            className={`
              flex
              items-center
              rounded-full
              px-2
              py-1
              text-xs
              font-semibold

              ${
                isPositive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }
            `}
          >

            {isPositive ? (
              <ArrowUpRight
                className="mr-1 h-4 w-4"
              />
            ) : (
              <ArrowDownRight
                className="mr-1 h-4 w-4"
              />
            )}

            {Math.abs(change)}%

          </span>

          <span
            className="
              text-xs
              text-slate-500
            "
          >
            compared to last month
          </span>

        </div>

      )}

    </div>
  );
}
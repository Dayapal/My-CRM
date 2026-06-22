import DealCard from "./DealCard";

interface Props {
  title: string;
  deals: any[];
}

export default function DealColumn({
  title,
  deals,
}: Props) {
  return (
    <div
      className="
      flex
      w-full
      min-w-0
      flex-col
      rounded-2xl
      border
      border-slate-200
      bg-white
      shadow-sm
      "
    >
      {/* Header */}
      <div
        className="
        flex
        items-center
        justify-between
        border-b
        border-slate-200
        px-4
        py-4
        "
      >
        <h2 className="font-semibold text-slate-800 truncate">
          {title}
        </h2>

        <span
          className="
          rounded-full
          bg-slate-100
          px-2.5
          py-1
          text-xs
          font-medium
          text-slate-600
          "
        >
          {deals.length}
        </span>
      </div>

      {/* Cards */}
      <div
        className="
        p-4
        space-y-3
        max-h-125
        overflow-y-auto
        "
      >
        {deals.length > 0 ? (
          deals.map((deal) => (
            <DealCard
              key={deal._id}
              deal={deal}
            />
          ))
        ) : (
          <div
            className="
            flex
            h-32
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            border-slate-300
            text-sm
            text-slate-400
            "
          >
            No deals found
          </div>
        )}
      </div>
    </div>
  );
}
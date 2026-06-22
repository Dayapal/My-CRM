import DealActions from "./DealActions";

export default function DealCard({
  deal,
}: any) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h3 className="font-semibold">
        {deal.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {deal.company?.name}
      </p>

      <p className="mt-2 font-bold text-emerald-600">
        ₹
        {deal.value.toLocaleString()}
      </p>

      <div className="mt-4">
        <DealActions
          deal={deal}
        />
      </div>
    </div>
  );
}
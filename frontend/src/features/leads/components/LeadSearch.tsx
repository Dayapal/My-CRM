import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function LeadSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search
        className="
        absolute
        left-3
        top-1/2
        h-4
        w-4
        -translate-y-1/2
        text-slate-400
      "
      />

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search leads..."
        className="
          w-full
          rounded-xl
          border
          bg-white
          py-3
          pl-10
          pr-4
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}
import type { Lead } from "../leads.types";
import LeadActions from "./LeadActions";

interface Props {
  leads: Lead[];
}

export default function LeadsTable({
  leads,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        bg-white
        shadow-sm
      "
    >
      <table className="w-full">
        <thead>
          <tr className="border-b bg-slate-50">

            <th
              className="
                p-4
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              Name
            </th>

            <th
              className="
                p-4
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              Email
            </th>

            <th
              className="
                p-4
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              Company
            </th>

            <th
              className="
                p-4
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              Status
            </th>

            <th
              className="
                p-4
                text-center
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              Actions
            </th>

          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead._id}
              className="
                border-b
                hover:bg-slate-50
                transition-colors
              "
            >
              <td className="p-4">
                <div>
                  <p className="font-medium text-slate-900">
                    {lead.firstName}{" "}
                    {lead.lastName}
                  </p>
                </div>
              </td>

              <td className="p-4 text-slate-600">
                {lead.email}
              </td>

              <td className="p-4 text-slate-600">
                {lead.company}
              </td>

        


<td className="p-4">
  <span
    className={`
      inline-flex
      items-center
      rounded-full
      px-3
      py-1
      text-xs
      font-semibold

      ${
        lead.status === "WON"
          ? "bg-green-100 text-green-700"
          : lead.status === "QUALIFIED"
          ? "bg-purple-100 text-purple-700"
          : lead.status === "CONTACTED"
          ? "bg-yellow-100 text-yellow-700"
          : lead.status === "CONVERTED"
          ? "bg-green-100 text-green-700"
          : lead.status === "LOST"
          ? "bg-red-100 text-red-700"
          : "bg-slate-100 text-slate-700"
      }
    `}
  >
    {lead.status}
  </span>
</td>
              <td className="p-4">
                
                <LeadActions lead={lead} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {leads.length === 0 && (
        <div className="p-10 text-center text-slate-500">
          No Leads Found
        </div>
      )}
    </div>
  );
}
import type { Lead, } from "../leads.types";
import LeadActions from "./LeadActions";
import ConvertLeadButton from "./ConvertLeadButton";

interface Props {
  leads: Lead[];
}


export default function LeadsTable({
  leads,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border">

      <table className="w-full">

        <thead>
          <tr className="border-b bg-muted">

            <th className="p-3 text-left">
              Name
            </th>

            <th className="p-3 text-left">
              Email
            </th>

            <th className="p-3 text-left">
              Company
            </th>

            <th className="p-3 text-left">
              Status
            </th>
            <th className="p-3">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {leads.map((lead) => (
            <tr
              key={lead._id}
              className="border-b"
            >
              <td className="p-3">
                {lead.firstName}{" "}
                {lead.lastName}
              </td>

              <td className="p-3">
                {lead.email}
              </td>

              <td className="p-3">
                {lead.company}
              </td>

              <td className="p-3">
                {lead.status}
              </td>

              <td className="p-3">

                <LeadActions
                  leadId={lead._id}
                />

              </td>

              <td className="p-3">

                {lead.status ===
                  "CONVERTED" ? (
                  <span
                    className="
      rounded-full
      bg-green-100
      px-3
      py-1
      text-xs
      text-green-700
    "
                  >
                    Converted
                  </span>
                ) : (
                  <ConvertLeadButton
                    leadId={lead._id}
                  />
                )}

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
import type { Company }
from "../companies.types";

import CompanyActions
from "./CompanyActions";

interface Props {
  companies: Company[];
}

export default function CompaniesTable({
  companies,
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

            <th className="p-4 text-left">
              Company
            </th>

            <th className="p-4 text-left">
              Industry
            </th>

            <th className="p-4 text-left">
              Employees
            </th>

            <th className="p-4 text-left">
              Revenue
            </th>

            <th className="p-4 text-left">
              Phone
            </th>

            <th className="p-4 text-center">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {companies.map(
            (company) => (
              <tr
                key={company._id}
                className="
                  border-b
                  hover:bg-slate-50
                  transition-colors
                "
              >
                <td className="p-4">
                  <div>
                    <p className="font-medium text-slate-900">
                      {company.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      {company.website}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {company.industry ||
                    "-"}
                </td>

                <td className="p-4">
                  {company.employeeCount ||
                    "-"}
                </td>

                <td className="p-4">
                  ₹
                  {company.annualRevenue?.toLocaleString() ||
                    0}
                </td>

                <td className="p-4">
                  {company.phone ||
                    "-"}
                </td>

                <td className="p-4">
                  <CompanyActions
                    company={company}
                  />
                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

      {companies.length ===
        0 && (
        <div
          className="
            p-10
            text-center
            text-slate-500
          "
        >
          No Companies Found
        </div>
      )}
    </div>
  );
}
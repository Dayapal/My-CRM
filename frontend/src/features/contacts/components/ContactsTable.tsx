import type { Contact }
from "../contacts.types";

import ContactActions
from "./ContactActions";

interface Props {
  contacts: Contact[];
}

export default function ContactsTable({
  contacts,
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
              Name
            </th>

            <th className="p-4 text-left">
              Email
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

          {contacts.map(
            (contact) => (
              <tr
                key={contact._id}
                className="
                border-b
                hover:bg-slate-50
              "
              >
                <td className="p-4">
                  {contact.firstName}{" "}
                  {contact.lastName}
                </td>

                <td className="p-4">
                  {contact.email}
                </td>

                <td className="p-4">
                  {contact.phone}
                </td>

                <td className="p-4">
                  <ContactActions
                    contact={
                      contact
                    }
                  />
                </td>
              </tr>
            )
          )}

        </tbody>

      </table>
    </div>
  );
}
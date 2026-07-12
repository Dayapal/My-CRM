import {
  SearchX,
} from "lucide-react";

import SearchItem
from "./SearchItem";

interface Props {

  query: string;

  loading: boolean;

  results: any;

}

export default function SearchResults({

//   query ,

  loading,

  results,

}: Props) {

  if (loading) {

    return (

      <div className="p-8 text-center">

        Searching...

      </div>

    );

  }

  if (!results) {

    return null;

  }

  const total =

    results.leads.length +

    results.contacts.length +

    results.companies.length +

    results.deals.length +

    results.tasks.length +

    results.meetings.length +

    results.notes.length +

    results.documents.length;

  if (total === 0) {

    return (

      <div className="flex flex-col items-center gap-3 p-8">

        <SearchX
          className="h-10 w-10 text-slate-400"
        />

        <p className="text-slate-500">

          No Results Found

        </p>

      </div>

    );

  }

  return (

    <div className="divide-y">

      {results.leads.length > 0 && (

        <section className="p-3">

          <h3
            className="
              mb-2
              text-xs
              font-semibold
              uppercase
              text-slate-500
            "
          >

            Leads

          </h3>

          {results.leads.map(

            (lead: any) => (

              <SearchItem

                key={lead._id}

                title={`${lead.firstName} ${lead.lastName}`}

                subtitle={
                  lead.email
                }

                type="Lead"

                href={`/leads/${lead._id}`}

              />

            )

          )}

        </section>

      )}

      {results.contacts.length > 0 && (

        <section className="p-3">

          <h3
            className="
              mb-2
              text-xs
              font-semibold
              uppercase
              text-slate-500
            "
          >

            Contacts

          </h3>

          {results.contacts.map(

            (contact: any) => (

              <SearchItem

                key={contact._id}

                title={`${contact.firstName} ${contact.lastName}`}

                subtitle={
                  contact.email
                }

                type="Contact"

                href={`/contacts/${contact._id}`}

              />

            )

          )}

        </section>

      )}
            {results.companies.length > 0 && (

        <section className="p-3">

          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500">

            Companies

          </h3>

          {results.companies.map((company: any) => (

            <SearchItem
              key={company._id}
              title={company.name}
              subtitle={company.website}
              type="Company"
              href={`/companies/${company._id}`}
            />

          ))}

        </section>

      )}

      {results.deals.length > 0 && (

        <section className="p-3">

          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500">

            Deals

          </h3>

          {results.deals.map((deal: any) => (

            <SearchItem
              key={deal._id}
              title={deal.title}
              subtitle={deal.stage}
              type="Deal"
              href={`/deals/${deal._id}`}
            />

          ))}

        </section>

      )}

      {results.tasks.length > 0 && (

        <section className="p-3">

          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500">

            Tasks

          </h3>

          {results.tasks.map((task: any) => (

            <SearchItem
              key={task._id}
              title={task.title}
              subtitle={task.status}
              type="Task"
              href={`/tasks/${task._id}`}
            />

          ))}

        </section>

      )}

      {results.meetings.length > 0 && (

        <section className="p-3">

          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500">

            Meetings

          </h3>

          {results.meetings.map((meeting: any) => (

            <SearchItem
              key={meeting._id}
              title={meeting.title}
              subtitle={meeting.location}
              type="Meeting"
              href={`/meetings/${meeting._id}`}
            />

          ))}

        </section>

      )}

      {results.notes.length > 0 && (

        <section className="p-3">

          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500">

            Notes

          </h3>

          {results.notes.map((note: any) => (

            <SearchItem
              key={note._id}
              title={note.title}
              subtitle={note.content}
              type="Note"
              href={`/notes/${note._id}`}
            />

          ))}

        </section>

      )}

      {results.documents.length > 0 && (

        <section className="p-3">

          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500">

            Documents

          </h3>

          {results.documents.map((document: any) => (

            <SearchItem
              key={document._id}
              title={document.title}
              subtitle={document.originalName}
              type="Document"
              href={`/documents/${document._id}`}
            />

          ))}

        </section>

      )}

    </div>

  );

}
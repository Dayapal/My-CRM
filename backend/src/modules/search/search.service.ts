import { Lead }
from "../leads/lead.model.js";

import { Contact }
from "../contacts/contact.model.js";

import { Company }
from "../companies/company.model.js";

import { Deal }
from "../deals/deal.model.js";

import { Task }
from "../task/task.model.js";

import { Meeting }
from "../meetings/meeting.model.js";

import { Note }
from "../notes/note.model.js";

import { CRMDocument }
from "../documents/document.model.js";

export const globalSearch =
  async (
    organizationId: string,
    query: string
  ) => {

    const regex =
      new RegExp(
        query,
        "i"
      );

    const [

      leads,

      contacts,

      companies,

      deals,

      tasks,

      meetings,

      notes,

      documents,

    ] = await Promise.all([

      Lead.find({

        organization:
          organizationId,

        $or: [

          {
            firstName:
              regex,
          },

          {
            lastName:
              regex,
          },

          {
            email:
              regex,
          },

          {
            phone:
              regex,
          },

        ],

      }).limit(5),

      Contact.find({

        organization:
          organizationId,

        $or: [

          {
            firstName:
              regex,
          },

          {
            lastName:
              regex,
          },

          {
            email:
              regex,
          },

        ],

      }).limit(5),

      Company.find({

        organization:
          organizationId,

        $or: [

          {
            name:
              regex,
          },

          {
            website:
              regex,
          },

        ],

      }).limit(5),

      Deal.find({

        organization:
          organizationId,

        title:
          regex,

      }).limit(5),

      Task.find({

        organization:
          organizationId,

        title:
          regex,

      }).limit(5),

      Meeting.find({

        organization:
          organizationId,

        title:
          regex,

      }).limit(5),

      Note.find({

        organization:
          organizationId,

        $or: [

          {
            title:
              regex,
          },

          {
            content:
              regex,
          },

        ],

      }).limit(5),

      CRMDocument.find({

        organization:
          organizationId,

        $or: [

          {
            title:
              regex,
          },

          {
            originalName:
              regex,
          },

        ],

      }).limit(5),

    ]);

    return {

      leads,

      contacts,

      companies,

      deals,

      tasks,

      meetings,

      notes,

      documents,

    };

  };
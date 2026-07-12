import {
  Building2,
  BriefcaseBusiness,
  CheckSquare,
  FileText,
  Folder,
  CalendarDays,
  UserRound,
  Users,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

interface Props {

  title: string;

  subtitle?: string;

  type:
    | "Lead"
    | "Contact"
    | "Company"
    | "Deal"
    | "Task"
    | "Meeting"
    | "Note"
    | "Document";

  href: string;

}

function getIcon(
  type: Props["type"]
) {

  switch (type) {

    case "Lead":
      return (
        <Users
          className="h-5 w-5 text-blue-600"
        />
      );

    case "Contact":
      return (
        <UserRound
          className="h-5 w-5 text-green-600"
        />
      );

    case "Company":
      return (
        <Building2
          className="h-5 w-5 text-violet-600"
        />
      );

    case "Deal":
      return (
        <BriefcaseBusiness
          className="h-5 w-5 text-orange-500"
        />
      );

    case "Task":
      return (
        <CheckSquare
          className="h-5 w-5 text-pink-600"
        />
      );

    case "Meeting":
      return (
        <CalendarDays
          className="h-5 w-5 text-cyan-600"
        />
      );

    case "Note":
      return (
        <FileText
          className="h-5 w-5 text-yellow-600"
        />
      );

    case "Document":
      return (
        <Folder
          className="h-5 w-5 text-slate-600"
        />
      );

    default:
      return (
        <FileText
          className="h-5 w-5"
        />
      );

  }

}

export default function SearchItem({

  title,

  subtitle,

  type,

  href,

}: Props) {

  return (

    <Link

      to={href}

      className="
        flex
        items-center
        gap-4

        rounded-lg

        p-3

        transition

        hover:bg-slate-100
      "

    >

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-slate-100
        "
      >

        {getIcon(type)}

      </div>

      <div className="flex-1">

        <p className="font-medium">

          {title}

        </p>

        {subtitle && (

          <p
            className="
              truncate
              text-sm
              text-slate-500
            "
          >

            {subtitle}

          </p>

        )}

      </div>

      <span
        className="
          rounded-full

          bg-blue-100

          px-3

          py-1

          text-xs

          font-medium

          text-blue-700
        "
      >

        {type}

      </span>

    </Link>

  );

}
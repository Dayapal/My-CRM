import DashboardLayout
from "@/layouts/DashboardLayout";

import {
  useState,
} from "react";

import {
  useActivities,
} from "../useActivities";

import ActivityTimeline
from "../components/ActivityTimeline";

import ActivityFilter
from "../components/ActivityFilter";

export default function ActivitiesPage() {

  const {

    data,

    isLoading,

  } = useActivities();

  const [

    filter,

    setFilter,

  ] = useState("");

  if (isLoading) {

    return (

      <DashboardLayout>

        Loading...

      </DashboardLayout>

    );

  }

  const filtered =

    data.filter(

      (activity: any) =>

        filter === ""

          ? true

          : activity.type.startsWith(
              filter
            )

    );

  return (

    <DashboardLayout>

      <div className="space-y-6">

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h1
              className="
                text-3xl
                font-bold
              "
            >

              Activities

            </h1>

            <p
              className="
                text-slate-500
              "
            >

              Organization Timeline

            </p>

          </div>

          <ActivityFilter

            value={filter}

            onChange={
              setFilter
            }

          />

        </div>

        <ActivityTimeline

          activities={
            filtered
          }

        />

      </div>

    </DashboardLayout>

  );

}
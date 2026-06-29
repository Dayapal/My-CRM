import DashboardLayout
    from "@/layouts/DashboardLayout";

import {
    useState,
} from "react";

import {
    Button,
} from "@/components/ui/button";

import {
    CalendarPlus,
} from "lucide-react";

import {
    useMeetings,
} from "../useMeetings";

import MeetingsTable
    from "../components/MeetingsTable";

import CreateMeetingDialog
    from "../components/CreateMeetingDialog";

import MeetingMetricsCards
    from "../components/MeetingMetricsCards";

import CalendarView
    from "../components/CalendarView";



export default function MeetingsPage() {

    const {

        data,

        isLoading,

    } = useMeetings();

    const [

        open,

        setOpen,

    ] = useState(false);

    if (isLoading) {

        return (

            <DashboardLayout>

                Loading...

            </DashboardLayout>

        );

    }

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

                            Meetings

                        </h1>

                        <p
                            className="
                text-slate-500
              "
                        >

                            Schedule and manage meetings

                        </p>

                    </div>

                    <Button
                        onClick={() =>
                            setOpen(true)
                        }
                        className="
              bg-blue-600
              hover:bg-blue-700
            "
                    >

                        <CalendarPlus
                            className="
                mr-2
                h-4
                w-4
              "
                        />

                        Create Meeting

                    </Button>

                </div>

                <div className="space-y-8">

                    <CalendarView
                        meetings={data || []}
                    />

                    <MeetingsTable
                        meetings={data || []}
                    />

                </div>

                <CreateMeetingDialog
                    open={open}
                    onClose={() =>
                        setOpen(false)
                    }
                />
                <MeetingMetricsCards
                    meetings={data || []}
                />

            </div>

        </DashboardLayout>

    );

}
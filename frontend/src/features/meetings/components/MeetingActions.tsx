import {
    Pencil,
    Trash2,
    CheckCircle,
} from "lucide-react";

import {
    Button,
} from "@/components/ui/button";

import {
    deleteMeeting,
    updateMeetingStatus,
} from "../meetings.api";
import { useState } from "react";
import EditMeetingDialog from "./EditMeetingDialog";

interface Props {
    meeting: any;
}

export default function MeetingActions({
    meeting,
}: Props) {
    const [open, setOpen] =
        useState(false);
    const completeMeeting =
        async () => {

            await updateMeetingStatus(
                meeting._id,
                "COMPLETED"
            );

            window.location.reload();

        };

    const removeMeeting =
        async () => {

            const ok =
                window.confirm(
                    "Delete Meeting?"
                );

            if (!ok) return;

            await deleteMeeting(
                meeting._id
            );

            window.location.reload();

        };

    return (

        <div className="flex gap-2">

            <Button
                size="icon"
                variant="outline"
            >
                <Pencil className="h-4 w-4" />
            </Button>

            <Button
                size="icon"
                variant="outline"
                onClick={
                    completeMeeting
                }
            >
                <CheckCircle className="h-4 w-4 text-green-600" />
            </Button>

            <Button
                size="icon"
                variant="outline"
                onClick={
                    removeMeeting
                }
            >
                <Trash2 className="h-4 w-4 text-red-600" />
            </Button>

            <Button
                size="icon"
                variant="outline"
                onClick={() => setOpen(true)}
            >
                <Pencil className="h-4 w-4" />
            </Button>

            <EditMeetingDialog
                open={open}
                onClose={() => setOpen(false)}
                meeting={meeting}
            />

        </div>

    );

}
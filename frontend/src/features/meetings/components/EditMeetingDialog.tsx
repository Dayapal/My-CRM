import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  updateMeeting,
} from "../meetings.api";

interface Props {
  open: boolean;
  onClose: () => void;
  meeting: any;
}

export default function EditMeetingDialog({
  open,
  onClose,
  meeting,
}: Props) {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      meetingType: "ONLINE",
      status: "SCHEDULED",
      startTime: "",
      endTime: "",
      location: "",
      meetingLink: "",
    });

  useEffect(() => {

    if (!meeting) return;

    setFormData({

      title:
        meeting.title || "",

      description:
        meeting.description || "",

      meetingType:
        meeting.meetingType || "ONLINE",

      status:
        meeting.status || "SCHEDULED",

      startTime:
        meeting.startTime
          ?.slice(0,16) || "",

      endTime:
        meeting.endTime
          ?.slice(0,16) || "",

      location:
        meeting.location || "",

      meetingLink:
        meeting.meetingLink || "",

    });

  }, [meeting]);

  const handleChange = (
    e:any
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit =
    async (
      e:React.FormEvent
    ) => {

      e.preventDefault();

      try{

        setLoading(true);

        await updateMeeting(

          meeting._id,

          formData

        );

        alert(
          "Meeting Updated Successfully"
        );

        onClose();

        window.location.reload();

      }

      catch(error:any){

        console.error(error);

        alert(
          error?.response?.data?.message ||
          "Failed To Update Meeting"
        );

      }

      finally{

        setLoading(false);

      }

    };

  return(

    <Dialog
      open={open}
      onOpenChange={onClose}
    >

      <DialogContent className="sm:max-w-xl">

        <DialogHeader>

          <DialogTitle>

            Edit Meeting

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded border p-3"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded border p-3"
            rows={3}
          />

          <select
            name="meetingType"
            value={formData.meetingType}
            onChange={handleChange}
            className="w-full rounded border p-3"
          >

            <option value="ONLINE">
              ONLINE
            </option>

            <option value="OFFLINE">
              OFFLINE
            </option>

            <option value="PHONE">
              PHONE
            </option>

          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded border p-3"
          >

            <option value="SCHEDULED">
              SCHEDULED
            </option>

            <option value="COMPLETED">
              COMPLETED
            </option>

            <option value="CANCELLED">
              CANCELLED
            </option>

            <option value="RESCHEDULED">
              RESCHEDULED
            </option>

          </select>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="datetime-local"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="rounded border p-3"
            />

            <input
              type="datetime-local"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="rounded border p-3"
            />

          </div>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded border p-3"
            placeholder="Location"
          />

          <input
            name="meetingLink"
            value={formData.meetingLink}
            onChange={handleChange}
            className="w-full rounded border p-3"
            placeholder="Meeting Link"
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >

            {loading
              ? "Updating..."
              : "Update Meeting"}

          </Button>

        </form>

      </DialogContent>

    </Dialog>

  );

}
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { createMeeting } from "../meetings.api";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateMeetingDialog({
  open,
  onClose,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      meetingType: "ONLINE",
      startTime: "",
      endTime: "",
      location: "",
      meetingLink: "",
      company: "",
      contact: "",
      deal: "",
    });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createMeeting(
        formData
      );

      alert(
        "Meeting Created Successfully"
      );

      onClose();

      window.location.reload();

    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Failed To Create Meeting"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-xl">

        <DialogHeader>

          <DialogTitle>
            Create Meeting
          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="title"
            placeholder="Meeting Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded border p-3"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={
              formData.description
            }
            onChange={handleChange}
            className="w-full rounded border p-3"
            rows={3}
          />

          <select
            name="meetingType"
            value={
              formData.meetingType
            }
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

          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="text-sm font-medium">
                Start Time
              </label>

              <input
                type="datetime-local"
                name="startTime"
                value={
                  formData.startTime
                }
                onChange={
                  handleChange
                }
                className="mt-1 w-full rounded border p-3"
                required
              />

            </div>

            <div>

              <label className="text-sm font-medium">
                End Time
              </label>

              <input
                type="datetime-local"
                name="endTime"
                value={
                  formData.endTime
                }
                onChange={
                  handleChange
                }
                className="mt-1 w-full rounded border p-3"
                required
              />

            </div>

          </div>

          <input
            name="location"
            placeholder="Location"
            value={
              formData.location
            }
            onChange={handleChange}
            className="w-full rounded border p-3"
          />

          <input
            name="meetingLink"
            placeholder="Meeting Link"
            value={
              formData.meetingLink
            }
            onChange={handleChange}
            className="w-full rounded border p-3"
          />

          {/* Replace with dropdown later */}

          <input
            name="company"
            placeholder="Company ID"
            value={
              formData.company
            }
            onChange={handleChange}
            className="w-full rounded border p-3"
          />

          <input
            name="contact"
            placeholder="Contact ID"
            value={
              formData.contact
            }
            onChange={handleChange}
            className="w-full rounded border p-3"
          />

          <input
            name="deal"
            placeholder="Deal ID"
            value={
              formData.deal
            }
            onChange={handleChange}
            className="w-full rounded border p-3"
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading
              ? "Creating..."
              : "Create Meeting"}
          </Button>

        </form>

      </DialogContent>
    </Dialog>
  );
}
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button }
from "@/components/ui/button";

import {
  createCompany,
} from "../companies.api";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateCompanyDialog({
  open,
  onClose,
}: Props) {

  const [formData, setFormData] =
    useState({
      name: "",
      website: "",
      industry: "",
      employeeCount: "",
      annualRevenue: "",
      phone: "",
      address: "",
    });

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {

        await createCompany(
          {
            ...formData,
            employeeCount:
              Number(
                formData.employeeCount
              ),
            annualRevenue:
              Number(
                formData.annualRevenue
              ),
          }
        );

        alert(
          "Company Created"
        );

        window.location.reload();

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent
        className="
          max-w-2xl
        "
      >
        <DialogHeader>
          <DialogTitle>
            Create Company
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="
            grid
            gap-4
          "
        >
          <input
            placeholder="Company Name"
            className="border p-3 rounded"
            onChange={(e)=>
              setFormData({
                ...formData,
                name:e.target.value
              })
            }
          />

          <input
            placeholder="Website"
            className="border p-3 rounded"
            onChange={(e)=>
              setFormData({
                ...formData,
                website:e.target.value
              })
            }
          />

          <input
            placeholder="Industry"
            className="border p-3 rounded"
            onChange={(e)=>
              setFormData({
                ...formData,
                industry:e.target.value
              })
            }
          />

          <input
            placeholder="Employees"
            className="border p-3 rounded"
            onChange={(e)=>
              setFormData({
                ...formData,
                employeeCount:e.target.value
              })
            }
          />

          <input
            placeholder="Revenue"
            className="border p-3 rounded"
            onChange={(e)=>
              setFormData({
                ...formData,
                annualRevenue:e.target.value
              })
            }
          />

          <input
            placeholder="Phone"
            className="border p-3 rounded"
            onChange={(e)=>
              setFormData({
                ...formData,
                phone:e.target.value
              })
            }
          />

          <textarea
            placeholder="Address"
            className="border p-3 rounded"
            onChange={(e)=>
              setFormData({
                ...formData,
                address:e.target.value
              })
            }
          />

          <Button
            type="submit"
          >
            Create Company
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}
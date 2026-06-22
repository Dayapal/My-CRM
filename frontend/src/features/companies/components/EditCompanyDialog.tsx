import {
  useEffect,
  useState,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button }
from "@/components/ui/button";

import {
  updateCompany,
} from "../companies.api";

interface Props {
  open: boolean;
  onClose: () => void;
  company: any;
}

export default function EditCompanyDialog({
  open,
  onClose,
  company,
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

  useEffect(() => {
    if (company) {
      setFormData({
        name:
          company.name || "",

        website:
          company.website || "",

        industry:
          company.industry || "",

        employeeCount:
          String(
            company.employeeCount || ""
          ),

        annualRevenue:
          String(
            company.annualRevenue || ""
          ),

        phone:
          company.phone || "",

        address:
          company.address || "",
      });
    }
  }, [company]);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {

        await updateCompany(
          company._id,
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
          "Company Updated"
        );

        onClose();

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
            Edit Company
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
            className="border rounded p-3"
            placeholder="Company Name"
            value={
              formData.name
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                name:
                  e.target.value,
              })
            }
          />

          <input
            className="border rounded p-3"
            placeholder="Website"
            value={
              formData.website
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                website:
                  e.target.value,
              })
            }
          />

          <input
            className="border rounded p-3"
            placeholder="Industry"
            value={
              formData.industry
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                industry:
                  e.target.value,
              })
            }
          />

          <input
            className="border rounded p-3"
            placeholder="Employees"
            value={
              formData.employeeCount
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                employeeCount:
                  e.target.value,
              })
            }
          />

          <input
            className="border rounded p-3"
            placeholder="Annual Revenue"
            value={
              formData.annualRevenue
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                annualRevenue:
                  e.target.value,
              })
            }
          />

          <input
            className="border rounded p-3"
            placeholder="Phone"
            value={
              formData.phone
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                phone:
                  e.target.value,
              })
            }
          />

          <textarea
            className="
              border
              rounded
              p-3
            "
            rows={4}
            placeholder="Address"
            value={
              formData.address
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                address:
                  e.target.value,
              })
            }
          />

          <Button
            type="submit"
            className="w-full"
          >
            Update Company
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
}
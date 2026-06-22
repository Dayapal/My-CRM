"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { convertLead } from "../leads.api";

interface Props {
  leadId: string;
  initialConverted?: boolean;
}

export default function ConvertLeadButton({
  leadId,
  initialConverted = false,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isConverted, setIsConverted] =
    useState(initialConverted);

  const handleConvert = async () => {
    if (isConverted) return;

    try {
      setIsLoading(true);

      await convertLead(leadId);

      setIsConverted(true);

      alert("Lead Converted Successfully");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to convert lead"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      disabled={isLoading || isConverted}
      onClick={handleConvert}
      className={
        isConverted
          ? `
            bg-emerald-600
            hover:bg-emerald-600
            text-white
            cursor-not-allowed
            rounded-xl
          `
          : `
            bg-linear-to-r
            from-blue-600
            to-indigo-600
            hover:from-blue-700
            hover:to-indigo-700
            text-white
            shadow-md
            hover:shadow-lg
            transition-all
            duration-300
            rounded-xl
          `
      }
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Converting...
        </>
      ) : isConverted ? (
        <>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Converted
        </>
      ) : (
        "Convert Lead"
      )}
    </Button>
  );
}
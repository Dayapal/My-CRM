import { Button } from "@/components/ui/button";

import { convertLead } from "../leads.api";

interface Props {
    leadId: string;
}

export default function ConvertLeadButton({
    leadId,
}: Props) {
    const handleConvert =
        async () => {
            try {
                await convertLead(
                    leadId
                );

                alert(
                    "Lead Converted Successfully"
                );

                window.location.reload();

            } catch (error: any) {
                console.error("CONVERT ERROR:", error);
                console.error("RESPONSE:", error?.response?.data);

                alert(
                    error?.response?.data?.message ||
                    "Failed to convert lead"
                );
            }
        };

    return (
        <Button
            className="bg-red-400"
            size="sm"
            onClick={
                handleConvert
            }
        >
            Convert
        </Button>
    );
}
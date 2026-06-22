import { useState, useEffect } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { updateLead } from "../leads.api";

interface Props {
    open: boolean;
    onClose: () => void;
    lead: any;
}

export default function EditLeadDialog({
    open,
    onClose,
    lead,
}: Props) {
    const [formData, setFormData] =
        useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            source: "",
        });

    useEffect(() => {
        if (lead) {
            setFormData({
                firstName:
                    lead.firstName || "",
                lastName:
                    lead.lastName || "",
                email:
                    lead.email || "",
                phone:
                    lead.phone || "",
                company:
                    lead.company || "",
                source:
                    lead.source || "",
            });
        }
    }, [lead]);

    const handleSubmit =
        async (
            e: React.FormEvent
        ) => {
            e.preventDefault();

            try {
                await updateLead(
                    lead._id,
                    formData
                );

                alert(
                    "Lead Updated Successfully"
                );

                window.location.reload();

            } catch (error: any) {
                console.error(error);

                console.log(
                    error?.response?.data
                );

                alert(
                    error?.response?.data?.message ||
                    "Failed To Update Lead"
                );
            }
        };
    console.log("EDIT LEAD:", lead);
    console.log("FORM DATA:", formData);
    return (
        <Dialog
            open={open}
            onOpenChange={onClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit Lead
                    </DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <input
                        className="w-full border p-3"
                        value={
                            formData.firstName
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                firstName:
                                    e.target.value,
                            })
                        }
                        placeholder="First Name"
                    />

                    <input
                        className="w-full border p-3"
                        value={
                            formData.lastName
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                lastName:
                                    e.target.value,
                            })
                        }
                        placeholder="Last Name"
                    />

                    <input
                        className="w-full border p-3"
                        value={
                            formData.email
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email:
                                    e.target.value,
                            })
                        }
                        placeholder="Email"
                    />

                    <input
                        className="w-full border p-3"
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
                        placeholder="Phone"
                    />

                    <input
                        className="w-full border p-3"
                        value={
                            formData.company
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                company:
                                    e.target.value,
                            })
                        }
                        placeholder="Company"
                    />

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Update Lead
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
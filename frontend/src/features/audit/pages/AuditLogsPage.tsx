import DashboardLayout from "@/layouts/DashboardLayout";

import AuditTable from "../components/AuditTable";
import AuditFilters from "../components/AuditFilters";
import AuditCard from "../components/AuditCard";

import {
    useAuditLogs,
} from "../useAudit";

export default function AuditLogsPage() {

    const {

        data,

        isLoading,

        isError,

    } = useAuditLogs();

    if (isLoading) {

        return (

            <DashboardLayout>

                <div className="flex h-[60vh] items-center justify-center">

                    Loading Audit Logs...

                </div>

            </DashboardLayout>);
    }
    if (isError) {

        return (
            <DashboardLayout>
                <div className="flex h-[60vh] items-center justify-center">
                    Failed To Load Audit Logs
                </div>
            </DashboardLayout>
        );

    }

    return (

        <DashboardLayout>

            <div className="space-y-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        Audit Logs

                    </h1>

                    <p className="text-gray-500">

                        Track all activities performed inside the CRM.

                    </p>

                </div>

                <AuditFilters />


                {/* Desktop */}

                <div className="hidden md:block">

                    <AuditTable
                        logs={data?.data ?? []}
                    />

                </div>

                {/* Mobile */}

                <div className="space-y-4 md:hidden">

                    {data?.data.map((log) => (

                        <AuditCard

                            key={log._id}

                            log={log}

                        />

                    ))}

                </div>

            </div>

        </DashboardLayout>

    );

}
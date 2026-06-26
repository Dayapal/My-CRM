import DashboardLayout
from "@/layouts/DashboardLayout";

import {
  useSettings,
} from "../useSettings";

import ProfileSettings
from "../components/ProfileSettings";

import OrganizationSettings
from "../components/OrganizationSettings";

export default function SettingsPage() {

  const {
    data,
    isLoading,
  } = useSettings();

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

        <div>
          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-slate-500">
            Manage profile and organization
          </p>
        </div>

        <ProfileSettings
          user={data.user}
        />

        <OrganizationSettings
          organization={
            data.organization
          }
        />

      </div>

    </DashboardLayout>
  );
}
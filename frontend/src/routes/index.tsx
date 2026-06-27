import {BrowserRouter,Routes,Route,} from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";

import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import LeadsPage from "../features/leads/pages/LeadsPage";
import ContactsPage from "@/features/contacts/pages/ContactsPage";
import CompaniesPage from "@/features/companies/pages/CompaniesPage";
import DealsPage from "@/features/deals/Pages/DealsPage";
import TasksPage from "@/features/tasks/pages/TasksPage";
import UsersPage from "@/features/users/pages/UsersPage";
import ReportsPage from "@/features/reports/pages/ReportsPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import ActivitiesPage from "@/features/activites/pages/ActivitiesPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/leads"
          element={<LeadsPage />}
        />
        <Route
          path="/contacts"
          element={<ContactsPage/>}
        />
        <Route
          path="/companies"
          element={<CompaniesPage/>}
        />
        <Route
          path="/deals"
          element={<DealsPage/>}
        />
        <Route
          path="/tasks"
          element={<TasksPage/>}
        />

        <Route
          path="/users"
          element={<UsersPage/>}
        />
        <Route
          path="/reports"
          element={<ReportsPage/>}
        />
        <Route
          path="/settings"
          element={<SettingsPage/>}
        />
        <Route
  path="/activities"
  element={<ActivitiesPage/>}
/>

      </Routes>
    </BrowserRouter>
  );
}
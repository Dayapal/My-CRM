import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";

import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import LeadsPage from "../features/leads/pages/LeadsPage";
import ContactsPage from "@/features/contacts/pages/ContactsPage";

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
      </Routes>
    </BrowserRouter>
  );
}
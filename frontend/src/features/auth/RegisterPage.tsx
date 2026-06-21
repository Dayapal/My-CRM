import { useState } from "react";
import { register } from "./auth.api";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organizationName: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response =
        await register(formData);

      console.log(response);

      alert("Registration Successful");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded border p-3"
            placeholder="First Name"
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded border p-3"
            placeholder="Last Name"
          />

          <input
            name="organizationName"
            value={
              formData.organizationName
            }
            onChange={handleChange}
            className="w-full rounded border p-3"
            placeholder="Organization"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border p-3"
            placeholder="Email"
          />

          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded border p-3"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-3 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
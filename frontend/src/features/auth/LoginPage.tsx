import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "./auth.api";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

 const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    const response =
  await login(formData);

console.log(
  "FULL LOGIN RESPONSE:",
  response
);

localStorage.setItem(
  "accessToken",
  response.accessToken
);

localStorage.setItem(
  "user",
  JSON.stringify(response.user)
);

alert("Login Successful");

navigate("/");
  } catch (error: any) {
    console.error(error);

    alert(
      error?.response?.data?.message ||
      "Login Failed"
    );
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
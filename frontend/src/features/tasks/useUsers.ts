import { useQuery } from "@tanstack/react-query";

// Local fallback implementation of getUsers to avoid missing-module errors.
// Adjust or replace with the real import/path when users.api is available.
const getUsers = async () => {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
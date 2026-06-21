import {
  createContext,
  useState,
  useEffect,
} from "react";

import { getMe } from "./auth.api";

interface AuthContextType {
  user: any;
  loading: boolean;
}

export const AuthContext =
  createContext<AuthContextType>({
    user: null,
    loading: true,
  });

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function init() {
      try {
        const data =
          await getMe();

        setUser(data.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
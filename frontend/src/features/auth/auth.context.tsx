import {
  createContext,
  useState,
  useEffect,
} from "react";

import { getMe } from "./auth.api";

interface AuthContextType {
  user: any;
  loading: boolean;
  isAuthenticated: boolean;
  refetchUser: () => Promise<void>;
  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType>({
    user: null,
    loading: true,
    isAuthenticated: false,
    refetchUser: async () => {},
    logout: () => {},
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

  const isAuthenticated = Boolean(user);

  async function refetchUser() {
    setLoading(true);

    try {
      const data = await getMe();

      setUser(data.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
  }

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
    isAuthenticated,
    refetchUser,
    logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
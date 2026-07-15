import type {ReactNode,} from "react";

import {useNavigate,} from "react-router-dom";

import {useQueryClient,} from "@tanstack/react-query";

import {AuthContext,} from "./auth.context";

import {useMe,} from "@/features/auth/useMe";

interface Props {
    children: ReactNode;
}

export default function AuthProvider({
    children,
}: Props) {

    const navigate =
        useNavigate();

    const queryClient =
        useQueryClient();

    const {
        data,
        isLoading,
        refetch,
    } = useMe();

    const user =
        data?.data?.user ?? null;

    const logout = () => {

        localStorage.removeItem(
            "accessToken"
        );

        queryClient.clear();

        navigate("/login");

    };

    return (

        <AuthContext.Provider
            value={{
                user,

                loading: isLoading,

                isAuthenticated: !!user,

                refetchUser: async () => {
                    await refetch();
                },

                logout,

            }}
        >

            {children}

        </AuthContext.Provider>

    );

}
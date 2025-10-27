import { apiSlice } from "../../app/api/apiSlice";
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (credentials) => ({
                url: "/auth/register",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
        }),
        deleteUser: builder.mutation({
            query: (credentials) => ({
                url: "/users/deleteCurrentUser",
                method: "DELETE",
                body: { ...credentials },
            }),
        }),
    }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useDeleteUserMutation,
} = authApiSlice;
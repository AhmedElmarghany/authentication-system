import { apiSlice } from "../../app/api/apiSlice";
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;

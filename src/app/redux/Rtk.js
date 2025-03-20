import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => "banners",
    }),
  }),
});

export const { useGetBannersQuery } = postApi;
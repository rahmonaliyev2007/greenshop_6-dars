import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_GREENSHOP_API,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('auth-storage')).state?.user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (api) => `${api}?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    }),
    getProductsByCategory: builder.query({
      query: (api) => api,
    }),
    getPostRegister: builder.query({
      query: (api) => api,
    }),
    signUp: builder.mutation({
      query: (newPost) => ({
        url: `/user/sign-up?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        method: "POST",
        body: newPost,
      }),
    }),
    signIn: builder.mutation({
      query: (newPost) => ({
        url: `/user/sign-in?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        method: "POST",
        body: newPost,
      }),
    }),
    like: builder.mutation({
      query: (flower_id, route_path) => ({
        url: `/user/create-wishlist?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        method: "POST",
        body: { flower_id, route_path },
      })
    }) 
  }),
});

export const { useGetDataQuery, useGetProductsByCategoryQuery, useSignUpMutation, useSignInMutation, useLikeMutation } = postApi;
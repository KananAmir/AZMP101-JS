import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories`,
    }),
    getCategoryById: builder.query({
      query: (id) => `categories/${id}`,
    }),
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
    }),
    postCategory: builder.mutation({
      query: (payload) => ({
        url: `categories`,
        method: "POST",
        body: payload,
      }),
    }),
    editCategory: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `categories/${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useDeleteCategoryByIdMutation,
  usePostCategoryMutation,
  useEditCategoryMutation,
} = categoriesApi;

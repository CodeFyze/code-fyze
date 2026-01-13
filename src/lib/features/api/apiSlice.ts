import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/', // Proxied to backend
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Blogs', 'Users'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'api/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getBlogs: builder.query({
      query: () => 'api/blog',
      providesTags: ['Blogs'],
    }),
    getBlog: builder.query({
      query: (id) => `api/blog/id/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),
    createBlog: builder.mutation({
      query: (formData) => ({
        url: 'api/blog',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Blogs'],
    }),
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `api/blog/${id}`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: (result, error, arg) => ['Blogs', { type: 'Blogs', id: arg.id }],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `api/blog/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blogs'],
    }),
    uploadBlogImage: builder.mutation({
      query: (formData) => ({
        url: 'api/blog/upload', // Assuming this endpoint exists based on previous code usage
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useUploadBlogImageMutation,
} = apiSlice;

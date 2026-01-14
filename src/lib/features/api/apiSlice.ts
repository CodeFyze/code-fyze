import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
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
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getBlogs: builder.query({
      query: () => 'blog',
      providesTags: (result) =>
        result
          ? [
            ...result.data.blogPosts.map(({ _id }: { _id: string }) => ({ type: 'Blogs' as const, id: _id })),
            { type: 'Blogs', id: 'LIST' },
          ]
          : [{ type: 'Blogs', id: 'LIST' }],
    }),
    getBlog: builder.query({
      query: (id) => `blog/id/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => `blog/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Blogs', id: slug }],
    }),
    getRecentBlogs: builder.query({
      query: () => 'blog/recent',
      providesTags: [{ type: 'Blogs', id: 'RECENT' }],
    }),
    createBlog: builder.mutation({
      query: (formData) => ({
        url: 'blog',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'Blogs', id: 'LIST' }],
    }),
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `blog/${id}`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Blogs', id: arg.id }, { type: 'Blogs', id: 'LIST' }],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blog/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Blogs', id: 'LIST' }],
    }),
    uploadBlogImage: builder.mutation({
      query: (formData) => ({
        url: 'blog/upload-content-image',
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
  useGetBlogBySlugQuery,
  useGetRecentBlogsQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useUploadBlogImageMutation,
} = apiSlice;

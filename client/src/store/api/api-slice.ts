import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../config';
import { baseQueryWithUnwrap } from './base-query';

// type User = {
//   id: string;
//   email: string;
//   password: string;
// };

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type TUser = {
  id: string;
  email: string;
  createdAt: string;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithUnwrap,
  tagTypes: ['Users'], // for caching
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/users',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Users'],
    }),

    getUserById: builder.query<TUser, string>({
      query: (id) => `/users/${id}`,
    }),

    getUsers: builder.query<TUser[], void>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useRegisterUserMutation, useGetUsersQuery, useGetUserByIdQuery } = apiSlice;

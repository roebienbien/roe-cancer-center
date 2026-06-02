import { api } from '@/services/api';

export type Role = 'ADMIN' | 'PATIENT' | 'DOCTOR';
export type User = {
  id: string;
  email: string;
  role: Role;
};

type getUsersResponse = {
  data: User[];
};

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<getUsersResponse, void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;

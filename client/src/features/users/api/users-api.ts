import { api } from '@/services/api';

export type Role = 'ADMIN' | 'PATIENT' | 'DOCTOR';
export type User = {
  id: string;
  email: string;
  role: Role;
};

type GetUsersResponse = {
  data: User[];
};
type GetUserByIdResponse = {
  data: User;
};

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersResponse, void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      transformResponse: (response: GetUserByIdResponse) => response.data,
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;

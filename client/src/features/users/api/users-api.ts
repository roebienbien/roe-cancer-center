import { api } from '@/services/api';

type User = {
  id: string;
  email: string;
};

type getUsersResponse = {
  data: User[];
};

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
    }),

    getUsers: builder.query<getUsersResponse, void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useRegisterMutation } = userApi;

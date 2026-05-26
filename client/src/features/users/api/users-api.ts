import { api } from '@/services/api';

export type User = {
  id: string;
  email: string;
  role: string;
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
  }),
});

export const { useGetUsersQuery } = userApi;

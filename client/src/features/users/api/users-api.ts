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
    // register: builder.mutation({
    //   query: (body) => ({
    //     url: '/users',
    //     method: 'POST',
    //     body,
    //   }),
    // }),

    getUsers: builder.query<getUsersResponse, void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;

import { User } from '@/features/users/api/users-api';
import { api } from '@/services/api';

type MeResponse = {
  success: boolean;
  message: string;
  data: User;
};
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),

    me: builder.query<User, void>({
      query: () => '/auth/me',
      transformResponse: (response: MeResponse) => response.data,
      providesTags: ['Auth'],
    }),

    logout: builder.mutation<User, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useMeQuery, useLogoutMutation } = authApi;

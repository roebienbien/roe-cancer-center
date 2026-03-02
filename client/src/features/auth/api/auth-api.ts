import { baseApi } from '@/app/baseApi';
// import { baseApi } from '../../../app/baseApi';

export const authApi = baseApi.injectEndpoints({
  endponts: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),

    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

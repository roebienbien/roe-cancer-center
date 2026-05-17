import { api } from '@/services/api';

const DOCTOR_URL = '/doctors';

const doctorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDoctor: builder.mutation({
      query: (body) => ({
        url: `${DOCTOR_URL}/me`,
        method: 'POST',
        body,
      }),
    }),

    getAllDoctors: builder.query({
      query: () => `${DOCTOR_URL}/`,
      providesTags: ['Doctor'],
    }),
  }),
});

export const { useCreateDoctorMutation } = doctorApi;

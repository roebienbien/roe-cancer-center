import { api } from '@/services/api';

const DOCTOR_URL = '/doctors';

type Doctor = {
  id: string;
  lastName: string;
  firstName: string;
  middleName: string;
  specialization: string;
  phone: string;
  licenseNumber: string;
  email: string;
};

type GetAllDoctorsResponse = {
  data: Doctor[];
};

const doctorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDoctor: builder.mutation({
      query: (body) => ({
        url: `${DOCTOR_URL}/me`,
        method: 'POST',
        body,
      }),
    }),

    getAllDoctors: builder.query<GetAllDoctorsResponse, void>({
      query: () => `${DOCTOR_URL}/`,
      providesTags: ['Doctor'],
    }),
  }),
});

export const { useCreateDoctorMutation, useGetAllDoctorsQuery } = doctorApi;

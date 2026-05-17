import { api } from '@/services/api';

export type Patient = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  sex: string;
  birthDate: string;
  phone: string;
  address: string;
  notes?: string;
};

export type GetAllPatientsResponse = {
  data: Patient[];
};

const PATIENT_URL = '/patients';

export const patientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPatient: builder.mutation({
      query: (body) => ({
        url: `${PATIENT_URL}/me`,
        method: 'POST',
        body,
      }),
    }),
    getAllPatient: builder.query<GetAllPatientsResponse, void>({
      query: () => `${PATIENT_URL}`,
      providesTags: ['Patient'],
    }),
  }),
});

export const { useCreatePatientMutation, useGetAllPatientQuery } = patientApi;

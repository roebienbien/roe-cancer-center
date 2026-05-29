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

type GetPatientResponse = {
  data: Patient;
};

export type GetAllPatientsResponse = {
  data: Patient[];
};

const PATIENT_URL = '/patients';

export const patientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerPatient: builder.mutation({
      query: (body) => ({
        url: `${PATIENT_URL}/`,
        method: 'POST',
        body,
      }),
    }),
    updatePatient: builder.mutation({
      query: (body) => ({
        url: `${PATIENT_URL}/me`,
        method: 'PATCH',
        body,
      }),
    }),
    getPatientById: builder.query<GetPatientResponse, string>({
      query: (id) => `${PATIENT_URL}/${id}`,
      providesTags: ['Patient'],
    }),

    getAllPatient: builder.query<GetAllPatientsResponse, void>({
      query: () => `${PATIENT_URL}`,
      providesTags: ['Patient'],
    }),
  }),
});

export const { useRegisterPatientMutation, useUpdatePatientMutation, useGetPatientByIdQuery, useGetAllPatientQuery } = patientApi;

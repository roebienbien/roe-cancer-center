import { api } from '@/services/api';

export type Patient = {
  id: string;
  barangay: string;
  street: string;
  city: string;
  region: string;
  province: string;
  postalCode: string;
  country: string;
  sex: string;
  notes?: string;
};

type GetPatientResponse = {
  data: Patient;
};

export type GetAllPatientsResponse = {
  // success: boolean;
  // message: string;
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

    getMe: builder.query<Patient, void>({
      query: () => `${PATIENT_URL}/me`,
      transformResponse: (response: GetPatientResponse) => response.data,
      providesTags: ['Auth'],
    }),

    getPatientById: builder.query<Patient, string>({
      query: (id) => `${PATIENT_URL}/${id}`,
      transformResponse: (response: GetPatientResponse) => response.data,
      providesTags: ['Patient'],
    }),

    getAllPatient: builder.query<Patient[], void>({
      query: () => `${PATIENT_URL}`,
      transformResponse: (response: GetAllPatientsResponse) => response.data,
      providesTags: ['Patient'],
    }),
  }),
});

export const { useGetMeQuery, useRegisterPatientMutation, useUpdatePatientMutation, useGetPatientByIdQuery, useGetAllPatientQuery } = patientApi;

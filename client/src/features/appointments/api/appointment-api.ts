import { api } from '@/services/api';
import { GetAppointmentsResponse } from '../appointment-types';

export const appointmentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query<GetAppointmentsResponse, void>({
      query: () => '/appointments',
      providesTags: ['Appointment'],
    }),
  }),
});

export const { useGetAppointmentsQuery } = appointmentApi;

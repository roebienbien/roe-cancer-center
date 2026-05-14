import { api } from '@/services/api';
import { GetAppointmentsResponse } from '../appointment-types';

export const appointmentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createAppointment: builder.mutation({
      query: (body) => ({
        url: '/appointments',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Appointment'],
    }),

    getAppointments: builder.query<GetAppointmentsResponse, void>({
      query: () => '/appointments',
      providesTags: ['Appointment'],
    }),
  }),
});

export const { useCreateAppointmentMutation, useGetAppointmentsQuery } = appointmentApi;

import { api } from '@/services/api';
import { GetAppointmentsResponse } from '../appointment-types';

export type Appointment = {
  id: string;
  status: string;
  type: string;
  doctorName: string;
  specialization: string | null;
  startAt: string;
  endAt: string;
};

type GetMyAppointmentsResponse = {
  data: Appointment[];
};

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
    getMyAppointments: builder.query<Appointment[], void>({
      query: () => '/appointments/me',
      transformResponse: (response: GetMyAppointmentsResponse) => response.data,
      providesTags: ['Appointment'],
    }),
  }),
});

export const { useCreateAppointmentMutation, useGetAppointmentsQuery, useGetMyAppointmentsQuery } = appointmentApi;

import { api } from '@/services/api';

type Doctor = {
  name: string;
  specialization: string;
};

type DoctorSlot = {
  id: string;
  startAt: string;
  doctor: Doctor;
  endAt: string;
  createdAt: string;
  updatedAt: string;
  booked: number;
  capacity: number;
  assignments: unknown[];
};

type GetAvailableDoctorSlotsResponse = {
  data: DoctorSlot[];
};

type GetDoctorSlotByIdResponse = {
  data: DoctorSlot;
};

const DOCTOR_SLOT_URL = '/doctor-slots';
const doctorSlotApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableDoctorSlots: builder.query<DoctorSlot[], void>({
      query: () => `${DOCTOR_SLOT_URL}/available`,
      transformResponse: (response: GetAvailableDoctorSlotsResponse) => response.data,
    }),
    getDoctorSlotById: builder.query<DoctorSlot, string>({
      query: (id: string) => `${DOCTOR_SLOT_URL}/${id}`,
      transformResponse: (response: GetDoctorSlotByIdResponse) => response.data,
    }),
  }),
});

export const { useGetAvailableDoctorSlotsQuery, useGetDoctorSlotByIdQuery } = doctorSlotApi;

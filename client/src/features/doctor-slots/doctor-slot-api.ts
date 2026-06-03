import { api } from '@/services/api';

type Slot = {
  id: string;
  startAt: string;
  endAt: string;
  capacity: number;
  createdAt: string;
  updatedAt: string;
  assignments: unknown[];
};

type GetAvailableSlots = {
  data: Slot[];
};
const doctorSlotApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableDoctorSlots: builder.query<Slot[], void>({
      query: () => '/doctor-slots/available',
      transformResponse: (response: GetAvailableSlots) => response.data,
    }),
  }),
});

export const { useGetAvailableDoctorSlotsQuery } = doctorSlotApi;

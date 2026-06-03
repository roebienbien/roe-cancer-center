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

type GetAvailableSlotsResponse = {
  data: Slot[];
};

const slotApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query<Slot[], void>({
      query: () => `/slots`,
      transformResponse: (response: GetAvailableSlotsResponse) => response.data,
    }),
  }),
});

export const { useGetAllSlotsQuery } = slotApi;

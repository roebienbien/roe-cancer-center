import { api } from '@/shared/lib/axios';

export const getMyAppointments = async () => {
  const res = await api.get('/appointments/me');

  return res.data;
};

import { useQuery } from '@tanstack/react-query';
import { getMyAppointments } from './api/getMyAppointments';

export function useMyAppointments() {
  return useQuery({
    queryKey: ['appointments', 'me'],
    queryFn: getMyAppointments,
  });
}

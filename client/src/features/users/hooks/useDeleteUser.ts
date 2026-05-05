import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/users-api';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    // after delete refresh users
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

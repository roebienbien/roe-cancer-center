import { useNavigate } from 'react-router';
import { logout } from './auth-api';
import { useMutation } from '@tanstack/react-query';

export function useLogout() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      localStorage.removeItem('accessToken');
      navigate('/login');
    },
  });
}

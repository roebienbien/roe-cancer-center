import { useMutation } from '@tanstack/react-query';
import { login } from './auth-api.ts';
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router'

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,

    onSuccess: (data: any) => {
      localStorage.setItem('accessToken', data.accessToken);
      navigate('/appointments');
    },
  });
};

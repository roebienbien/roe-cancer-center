import { useMutation } from '@tanstack/react-query';
import { register } from './auth-api';

export const useRegister = () => {
  return useMutation({
    mutationFn: register,

    onSuccess: (data: any) => {
      // if return a token immediately
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
      }
    },

    onError: (error: any) => {
      console.log('full errror: ', error);

      console.log('Server Response:', error.response?.data);
    },
  });
};

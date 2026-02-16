import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import config from '../../config';

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

const rawBaseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl,
});

export const baseQueryWithUnwrap: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  // ✅ unwrap success response automatically
  if (result.data) {
    const response = result.data as ApiResponse<unknown>;

    if ('data' in response) {
      return {
        data: response.data,
      };
    }
  }

  return result;
};

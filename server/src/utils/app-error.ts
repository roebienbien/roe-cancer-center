// export const createError = (message: string, statusCode = 500, errors?: any) => {
//   return { message, statusCode, errors }
// }
//
export const createError = (
  message: string,
  statusCode = 500,
  errors?: any
) => {
  const err = new Error(message) as any;

  err.statusCode = statusCode;
  err.errors = errors;
  err.isOperational = true;

  return err;
};

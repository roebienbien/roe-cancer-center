export const createError = (message: string, statusCode = 500, errors?: any) => {
  return { message, statusCode, errors }
}

import { NextFunction, Request, Response } from 'express'
import { HttpError } from '../errors/http.error'

export const globalErrorHandler = (
  err: HttpError,
  _: Request,
  res: Response,
  __: NextFunction,
) => {
  if (err.name === 'ZodError') {
    return res.status(400).json({
      message: 'O objeto da requisição é inválido',
      errors: err.errors,
    })
  }

  const errorStatusCode = err.status ?? 500
  return res.status(errorStatusCode).json({
    status: errorStatusCode,
    message: err.message,
  })
}

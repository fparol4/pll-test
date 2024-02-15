import { Request, Response } from 'express'

export const NotFoundHandler = async (_: Request, response: Response) => {
  return response.status(404).json({
    status: 404,
    message: 'Recurso não existente/disponível',
  })
}

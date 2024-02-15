import { Request, Response, NextFunction } from 'express'
import { UnauthorizedError } from '../../shared/errors/unauthorized.error'
import { verify } from '../auth.service'

export const JWTVerifyMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authenticationToken = request.headers['authorization']?.split(' ')[1]
  if (!authenticationToken) {
    throw new UnauthorizedError('Token de autenticação não enviado')
  }
  const content = verify(authenticationToken)
  if (!content) {
    throw new UnauthorizedError('Token enviado não é valido')
  }
  response.locals.accountId = content.accountId
  next()
}

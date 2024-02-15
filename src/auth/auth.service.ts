import jwt, { JwtPayload } from 'jsonwebtoken'
import { UnauthorizedError } from '../shared/errors/unauthorized.error'
import { getAccountByNumber } from '../account/account.service'
import { env } from '../shared/utils/get-env'

export const signIn = (content: object): string => {
  const token = jwt.sign(content, env('JWT_PRIVATE_KEY'), {
    expiresIn: env('JWT_EXPIRATION'),
  })
  return token
}

export const verify = (token: string): JwtPayload => {
  try {
    const content = jwt.verify(token, env('JWT_PRIVATE_KEY')) as JwtPayload
    return content
  } catch {
    throw new UnauthorizedError(
      '[Authentication] - JWT Token cannot be verified',
    )
  }
}

export const auth = async (accountNumber: number) => {
  const account = await getAccountByNumber(accountNumber)
  const token = signIn({
    accountId: account.id,
    accountNumber: account.number,
  })
  return token
}

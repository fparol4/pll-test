import { Request, Response } from 'express'
import { auth } from '../auth.service'

export const authenticationHandler = async (
  request: Request,
  response: Response,
) => {
  const accountNumber: number = request.body.accountNumber
  const authenticationToken = await auth(accountNumber)
  return response.json({
    token: authenticationToken,
  })
}

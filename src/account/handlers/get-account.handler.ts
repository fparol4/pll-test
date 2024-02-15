import { Request, Response } from 'express'
import { getAccountByNumber } from '../account.service'
import { HttpError } from '../../shared/errors/http.error'

export const getAccountHandler = async (
  request: Request,
  response: Response,
) => {
  const accountNumber = +request.params.accountNumber

  if (!accountNumber) {
    throw new HttpError('AccountNumber is not valid')
  }

  const account = await getAccountByNumber(accountNumber)
  return response.json(account)
}

import { Request, Response } from 'express'
import { TransactionSchema } from '../schemas/transaction.schema'
import { startNewTransaction } from '../transaction.service'

export const addTransactionHandler = async (
  request: Request,
  response: Response,
) => {
  const { body } = request
  const transactionDTO = TransactionSchema.parse(body)
  const transaction = await startNewTransaction(transactionDTO)
  return response.json(transaction)
}

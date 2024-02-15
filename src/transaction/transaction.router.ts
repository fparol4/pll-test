import { Router } from 'express'
import { addTransactionHandler } from './handlers/add-transaction.handler'

export const TransactionRouter = Router()
TransactionRouter.post('/transactions', addTransactionHandler)

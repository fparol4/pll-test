import { Router } from 'express'
import { addTransactionHandler } from './handlers/add-transaction.handler'

export const transactionRouter = Router()
transactionRouter.post('/', addTransactionHandler)

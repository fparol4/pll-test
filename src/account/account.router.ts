import { Router } from 'express'
import { getAccountHandler } from './handlers/get-account.handler'

export const accountRouter = Router()
accountRouter.get('/accounts/:accountNumber', getAccountHandler)

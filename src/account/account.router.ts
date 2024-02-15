import { Router } from 'express'
import { getAccountHandler } from './handlers/get-account.handler'

export const AccountRouter = Router()
AccountRouter.get('/accounts/:accountNumber', getAccountHandler)

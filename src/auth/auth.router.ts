import { Router } from 'express'
import { authenticationHandler } from './handlers/authenticate.handler'

export const authRouter = Router()
authRouter.post('/auth', authenticationHandler)

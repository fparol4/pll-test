import { Router } from 'express'
import { authenticationHandler } from './handlers/authenticate.handler'

export const AuthRouter = Router()
AuthRouter.post('/auth', authenticationHandler)

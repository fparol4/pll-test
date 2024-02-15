import { Router } from 'express'
import { JWTVerifyMiddleware } from './auth/middlewares/jwt-verify.middleware'
import { accountRouter } from './account/account.router'
import { authRouter } from './auth/auth.router'
import { transactionRouter } from './transaction/transaction.router'
import { notFoundHandler } from './shared/handlers/not-found.handler'

export const appRouter = Router()

appRouter.use('/auth', authRouter)
appRouter.use(JWTVerifyMiddleware)
appRouter.use('/transactions', transactionRouter)
appRouter.use('/accounts', accountRouter)
appRouter.use('*', notFoundHandler)


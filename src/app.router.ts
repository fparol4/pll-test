import { Router } from 'express'
import { AccountRouter } from './account/account.router'
import { AuthRouter } from './auth/auth.router'
import { TransactionRouter } from './transaction/transaction.router'
import { JWTVerifyMiddleware } from './auth/middlewares/jwt-verify.middleware'
import { NotFoundHandler } from './shared/handlers/not-found.handler'

export const AppRouter = Router()

AppRouter.use(AuthRouter)
AppRouter.use(JWTVerifyMiddleware)
AppRouter.use(TransactionRouter)
AppRouter.use(AccountRouter)
AppRouter.use(NotFoundHandler)

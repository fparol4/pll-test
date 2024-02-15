import 'express-async-errors'

import express from 'express'
import { AppRouter } from './app.router'
import { ErrorMiddleware } from './shared/middlewares/error-handler.middleware'

const app = express()
app.use(express.json())
app.use(AppRouter)
app.use(ErrorMiddleware)

app.listen(3000, () => console.log('[3000] - Listening'))

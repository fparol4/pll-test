import 'express-async-errors'

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { appRouter } from './app.router'
import { globalErrorHandler } from './shared/middlewares/error-handler.middleware'

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(appRouter)
app.use(globalErrorHandler)

app.listen(3000, () => console.log('[3000] - Listening'))

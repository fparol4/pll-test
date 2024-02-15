import { PrismaClient } from '@prisma/client'

export type PrismaTransactionalClient = Parameters<
  Parameters<PrismaClient['$transaction']>[0]
>[0]

// Solves singleton problem
export default new PrismaClient()

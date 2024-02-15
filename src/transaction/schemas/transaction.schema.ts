import { z } from '../../shared/utils/pt-zod'

export const OPERATION_TYPES = ['SAQUE', 'DEPOSITO'] as const

export enum TRANSACTION_TYPES {
  'SAQUE' = 'SAQUE',
  'DEPOSITO' = 'DEPOSITO',
}

export const TransactionSchema = z
  .object({
    operationType: z.enum(OPERATION_TYPES),
    accountNumber: z.number().min(1),
    amount: z.number().min(1),
  })
  .strict()

export type TransactionDTO = z.infer<typeof TransactionSchema>

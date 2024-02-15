import {
  addDepositToAccount,
  withdrawFromAccount,
} from '../account/account.service'
import prismaClient, {
  PrismaTransactionalClient,
} from '../shared/utils/prisma.client'
import { TRANSACTION_TYPES, TransactionDTO } from './schemas/transaction.schema'

export const startNewTransaction = async (transactionDTO: TransactionDTO) => {
  if (transactionDTO.operationType === TRANSACTION_TYPES.DEPOSITO) {
    return addDepositTransaction(transactionDTO)
  }

  return addWithdrawTransaction(transactionDTO)
}

export const addNewTransaction = async (
  prismaTransactionClient: PrismaTransactionalClient = prismaClient,
  transactionDTO: TransactionDTO,
  accountId: string,
) => {
  const transaction = await prismaTransactionClient.transaction.create({
    data: {
      amount: transactionDTO.amount,
      operation: transactionDTO.operationType,
      accountId: accountId,
    },
  })

  return transaction
}

export const addDepositTransaction = async (transactionDTO: TransactionDTO) => {
  const transaction = await prismaClient.$transaction(
    async prismaTransaction => {
      const account = await addDepositToAccount(
        prismaTransaction,
        transactionDTO,
      )
      const transaction = addNewTransaction(
        prismaTransaction,
        transactionDTO,
        account.id,
      )
      return transaction
    },
  )

  return transaction
}

export const addWithdrawTransaction = async (
  transactionDTO: TransactionDTO,
) => {
  const transaction = await prismaClient.$transaction(
    async prismaTransaction => {
      const account = await withdrawFromAccount(
        prismaTransaction,
        transactionDTO,
      )
      const transaction = addNewTransaction(
        prismaTransaction,
        transactionDTO,
        account.id,
      )
      return transaction
    },
  )

  return transaction
}

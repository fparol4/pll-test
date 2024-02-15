import { BadRequestError } from '../shared/errors/bad-request.error'
import { NotFoundError } from '../shared/errors/not-found.error'
import prismaClient, {
  PrismaTransactionalClient,
} from '../shared/utils/prisma.client'
import { TransactionDTO } from '../transaction/schemas/transaction.schema'
import { Account } from './schemas/account.schema'

export const getAccountByNumber = async (
  accountNumber: number,
): Promise<Account> => {
  try {
    const account: Account = await prismaClient.account.findFirstOrThrow({
      where: {
        number: accountNumber,
      },
    })

    return account
  } catch {
    throw new NotFoundError(`Conta não identificada`)
  }
}

export const addDepositToAccount = async (
  prismaTransactionClient: PrismaTransactionalClient = prismaClient,
  transactionDTO: TransactionDTO,
) => {
  const account = await getAccountByNumber(transactionDTO.accountNumber)
  const newBalance = Number(
    (account.balance + transactionDTO.amount).toFixed(2),
  )
  await prismaTransactionClient.account.update({
    where: { id: account.id },
    data: { balance: newBalance },
  })
  return account
}

export const withdrawFromAccount = async (
  prismaTransactionClient: PrismaTransactionalClient = prismaClient,
  transactionDTO: TransactionDTO,
) => {
  const account = await getAccountByNumber(transactionDTO.accountNumber)
  if (account.balance < transactionDTO.amount) {
    throw new BadRequestError(
      'O valor do saque não pode ser superior ao saldo da conta',
    )
  }
  const newBalance = Number(
    (account.balance - transactionDTO.amount).toFixed(2),
  )
  await prismaTransactionClient.account.update({
    where: { id: account.id },
    data: { balance: newBalance },
  })
  return account
}

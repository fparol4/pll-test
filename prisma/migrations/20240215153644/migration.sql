-- CreateEnum
CREATE TYPE "TransactionOperation" AS ENUM ('DEPOSITO', 'SAQUE');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "number" SERIAL NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "operation" "TransactionOperation" NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

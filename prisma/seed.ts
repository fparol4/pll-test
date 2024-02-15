import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    const users = Array(36).fill(1).map(_ => ({
        name: faker.person.fullName(),
        document: faker.number.int({ min: 0, max: 99999999999 }).toString(),
        balance: faker.number.int({ min: 0, max: 20000 }),
    }))

    await prisma.account.createMany({
        data: users,
    });
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });

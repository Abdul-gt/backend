const { PrismaClient } = require('@prisma/client');

// This prevents creating multiple connection pools
// during development when the server reloads.
const prismaClientSingleton = () => {
    return new PrismaClient();
};

const globalForPrisma = global;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

module.exports = prisma;
const { PrismaClient } =require('@prisma/client')
const { PrismaPg } =require('@prisma/adapter-pg')
const pg=require('pg')

// 1. Setup the PostgreSQL driver
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

// 2. Pass the adapter to the Client
const prisma = new PrismaClient({ adapter })

module.exports = prisma
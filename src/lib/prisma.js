import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

// 1. Setup the PostgreSQL driver
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

// 2. Pass the adapter to the Client
const prisma = new PrismaClient({ adapter })

export { prisma }
import 'dotenv/config';
require('dotenv').config();
const express=require('express')
const prisma = require('./lib/prisma');

const app=express()
app.use(express.json())



const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Add this to your Express app
app.get('/test', async (req, res) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                email: `test-${Date.now()}@test.com`,
                name: 'Supabase User',
            },
        });
        res.json({ message: "Success!", user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = app
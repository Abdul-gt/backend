require('dotenv').config();
const express=require('express')
const prisma = require('./lib/prisma');

const app=express()
app.use(express.json())



module.exports = app
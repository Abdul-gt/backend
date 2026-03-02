const express = require('express');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
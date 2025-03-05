require("dotenv").config();
const express = require('express');
const cors = require('cors');
const v1CarRouter = require('./v1/routes/carRoutes');
const connectDB = require('./database/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

app.use(express.json());
app.use(cors());
app.use("/v1/cars", v1CarRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
require("dotenv").config();
const express = require('express');
const v1CarRouter = require('./v1/routes/carRoutes');
const db = require('./database/database');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
db.connect();

app.use(express.json());
app.use("/api/v1/cars", v1CarRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
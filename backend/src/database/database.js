require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("❌ ERROR: MONGO_URI no está definido en las variables de entorno.");
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error);
        process.exit(1); // Detiene la app si falla la conexión
    }
};
module.exports = connectDB;

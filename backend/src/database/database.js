require('dotenv').config();
const mongoose = require('mongoose');

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB Atlas"))
    .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

module.exports = mongoose;

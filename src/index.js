const express = require("express");
const app = express();
const PORT = 3000;

//Importar rutas
const carRoutes = require('./routes/cars');

//Middleware para parsear JSON
app.use(express.json());

//Usar las rutas
app.use('/api', carRoutes);

//Ruta para probar el servidor
app.get("/", (req, res) => {
    res.send('¡Bienvenido a la API de coches JDM!');
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})
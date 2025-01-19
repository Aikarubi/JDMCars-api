//Rutas para hacer peticiones a la base de datos

const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

//Rutas
router.get('/cars', carController.getAllCars); //Obtener todos los coches
router.get('/cars/:id', carController.getCarById); //Obtener un coche por su id
router.get('/cars/search/:brand', carController.searchCarsByBrand); //Buscar coches por marca
//router.get('/cars/randomCar', carController.randomCars); //Obtener coches aleatorios
router.get('/cars/test', carController.testFunction);
router.get('/test', (req, res) => {
    console.log('testFunction ejecutado');
    res.json({ message: 'Funcionando correctamente' });
});


module.exports = router;

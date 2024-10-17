//Rutas para hacer peticiones a la base de datos

const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

//Rutas
router.get('/cars', carController.getAllCars); //Obtener todos los coches
router.get('/cars/:id', carController.getCarById); //Obtener un coche por su id
router.get('/cars/search', carController.searchCars); //Buscar coches por marca

module.exports = router;

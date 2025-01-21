const express = require('express');
const router = express.Router();
const carController = require('../../controllers/carController');

router
    .get('/random', carController.getRandomCar)
    .get('/:id', carController.getOneCar)
    .get('/', carController.getAllCars)

module.exports = router;
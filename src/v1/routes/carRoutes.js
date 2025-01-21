const express = require('express');
const router = express.Router();
const carController = require('../../controllers/carController');

router
    .get('/random', carController.getRandomCar)
    .get('/brands', carController.getAllBrands)
    .get('/stats', carController.getGlobalStats)
    .get('/paginated', carController.getPaginatedCars)
    .get('/:id', carController.getOneCar)
    .get('/', carController.getAllCars)

module.exports = router;
const carService = require('../services/carService');

const getAllCars = (req, res) => {
    const allCars = carService.getAllCars();
    res.send({ status: "OK", data: allCars });
}

const getAllBrands = (req, res) => {
    const allBrands = carService.getAllBrands();
    res.send({ status: "OK", data: allBrands });
}

const getOneCar = (req, res) => {
    const id = req.params.id;
    const car = carService.getOneCar(id);
    res.send({ status: "OK", data: car });
}

const getRandomCar = (req, res) => {
    const randomCar = carService.getRandomCar();
    res.send({ status: "OK", data: randomCar });
}

const getGlobalStats = (req, res) => {
    const stats = carService.getGlobalStats();
    res.send({ status: "OK", data: stats });
};

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
    getAllBrands,
    getGlobalStats
 
}
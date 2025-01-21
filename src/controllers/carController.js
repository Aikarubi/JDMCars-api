const carService = require('../services/carService');

const getAllCars = (req, res) => {
    const allCars = carService.getAllCars();
    res.send({ status: "OK", data: allCars });
}

const getOneCar = (req, res) => {
    const id = req.params.id;
    const car = carService.getOneCar(id);
    res.send({ status: "OK", data: car });
}

module.exports = {
    getAllCars,
    getOneCar
}
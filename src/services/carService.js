const Car = require('../database/Car');

const getAllCars = () => {
    const allCars = Car.getAllCars();
    return allCars;
}

const getOneCar = (id) => {
    const car = Car.getOneCar(id);
    return car;
}

module.exports = {
    getAllCars,
    getOneCar
}
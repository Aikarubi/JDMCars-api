const Car = require('../database/Car');

const getAllCars = () => {
    const allCars = Car.getAllCars();
    return allCars;
}

const getAllBrands = () => {
    const allBrands = Car.getAllBrands();
    return allBrands;
}

const getOneCar = (id) => {
    const car = Car.getOneCar(id);
    return car;
}

const getRandomCar = () => {
    const randomCar = Car.getRandomCar();
    return randomCar;
}

const getGlobalStats = () => {
    return Car.getGlobalStats();
};

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
    getAllBrands,
    getGlobalStats
 
}
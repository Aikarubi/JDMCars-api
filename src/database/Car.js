const DB = require('./db.json');

const getAllCars = () => {
    return DB.cars;
};

const getOneCar = (id) => {
    return DB.cars.find(car => car.id === id);
};

module.exports = {
    getAllCars,
    getOneCar
};
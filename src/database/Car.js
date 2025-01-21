const DB = require('./db.json');

const getAllCars = () => {
    return DB.cars;
};

const getOneCar = (id) => {
    return DB.cars.find(car => car.id === id);
};

const getRandomCar = () => {
    // Índice aleatorio
    const randomIndex = Math.floor(Math.random() * DB.cars.length);
    return DB.cars[randomIndex];
}

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
};
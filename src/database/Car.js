const DB = require('./db.json');

const getAllCars = () => {
    return DB.cars;
};

const getAllBrands = () => {
    const brands = DB.cars.map(car => car.brand);
    return [...new Set(brands)];
}

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
    getAllBrands,
 
};
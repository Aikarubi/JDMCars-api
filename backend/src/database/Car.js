//const DB = require('./database');
const mongoose = require('mongoose');

/*const getAllCars = () => {
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

const getGlobalStats = () => {
    const totalCars = DB.cars.length;

    const totalHorsepower = DB.cars.reduce((sum, car) => sum + car.horsepower, 0);
    const avgHorsepower = (totalHorsepower / totalCars).toFixed(2);

    const speeds = DB.cars.map(car => car.max_speed);
    const maxSpeed = Math.max(...speeds);
    const minSpeed = Math.min(...speeds);

    const transmissionCount = DB.cars.reduce((count, car) => {
        count[car.transmission] = (count[car.transmission] || 0) + 1;
        return count;
    }, {});

    const brandCount = DB.cars.reduce((count, car) => {
        count[car.brand] = (count[car.brand] || 0) + 1;
        return count;
    }, {});

    return {
        totalCars,
        avgHorsepower,
        maxSpeed,
        minSpeed,
        transmissionCount,
        brandCount
    };
};

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
    getAllBrands,
    getGlobalStats 
 
};*/

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Object,
    engine: String,
    horsepower: Number,
    transmission: String,
    drivetrain: String,
    max_speed: Number,
    weight: Number,
    fuel_consumption: String,
    price: String,
    country: String,
    description: String,
    acceleration: String,
    image: String
});

// Creamos el modelo Car basado en el esquema
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
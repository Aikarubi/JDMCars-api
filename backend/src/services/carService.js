const Car = require('../database/Car');

const getAllCars = async () => {
    /*const allCars = Car.getAllCars();
    return allCars;*/

    try {
        return await Car.find(); //  Obtiene todos los coches de MongoDB
    } catch (error) {
        throw new Error("Error al obtener coches: " + error.message);
    }
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

const getPaginatedCars = (page, limit) => {
    const allCars = Car.getAllCars();
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedCars = allCars.slice(startIndex, endIndex);


    return {
        currentPage: page,
        totalPages: Math.ceil(allCars.length / limit),
        totalCars: allCars.length,
        data: paginatedCars
    };
}

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
    getAllBrands,
    getGlobalStats,
    getPaginatedCars
 
}
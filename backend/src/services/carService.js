const Car = require('../database/Car');

const getAllCars = async () => {
    try {
        return await Car.find(); 
    } catch (error) {
        throw new Error("Error al obtener coches: " + error.message);
    }
}

const getAllBrands = async () => {
    try {
        // Obtener todas las marcas sin duplicados
        const brands = await Car.distinct("brand"); 
        return brands;
    } catch (error) {
        throw new Error("Error al obtener marcas: " + error.message);
    }
};

const getOneCar = async (id) => {
    try {
        // Convertimos el ID a número y buscamos por el campo "id"
        const car = await Car.findOne({ id: Number(id) });

        if (!car) throw new Error("Coche no encontrado");

        return car;
    } catch (error) {
        throw new Error("Error al obtener el coche: " + error.message);
    }
};

const getRandomCar = async () => {
    try {
        const randomCar = await Car.aggregate([{ $sample: { size: 1 } }]); // Obtiene un coche aleatorio

        if (!randomCar.length) throw new Error("No hay coches en la base de datos");

        return randomCar[0]; // Devuelve el primer (y único) resultado
    } catch (error) {
        throw new Error("Error al obtener un coche aleatorio: " + error.message);
    }
};
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
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
const getGlobalStats = async () => {
    try {
        const stats = await Car.aggregate([
            {
                $group: {
                    _id: null, 
                    totalCars: { $sum: 1 },
                    totalBrands: { $addToSet: "$brand" }, // Lista de marcas únicas
                    avgHorsepower: { $avg: "$horsepower" }, // Potencia media
                    avgMaxSpeed: { $avg: "$max_speed" } // Velocidad máxima media
                }
            },
            {
                $project: {
                    _id: 0,
                    totalCars: 1,
                    totalBrands: { $size: "$totalBrands" }, // Contamos las marcas únicas
                    avgHorsepower: { $round: ["$avgHorsepower", 2] }, // Redondeamos a 2 decimales
                    avgMaxSpeed: { $round: ["$avgMaxSpeed", 2] }
                }
            }
        ]);

        if (!stats.length) throw new Error("No hay datos disponibles");

        return stats[0]; // Devolvemos el primer objeto
    } catch (error) {
        throw new Error("Error al obtener estadísticas globales: " + error.message);
    }
};

const filterCars = async (filters) => {
    try {
        const query = {};

        // Filtrar por cada campo según el esquema
        if (filters.brand) query.brand = filters.brand;
        if (filters.model) query.model = filters.model;
        if (filters.year) query.year = parseInt(filters.year);
        if (filters.engine) query.engine = filters.engine;
        if (filters.horsepower) query.horsepower = parseInt(filters.horsepower);
        if (filters.transmission) query.transmission = filters.transmission;
        if (filters.drivetrain) query.drivetrain = filters.drivetrain;
        if (filters.max_speed) query.max_speed = parseInt(filters.max_speed);
        if (filters.weight) query.weight = parseInt(filters.weight);
        if (filters.fuel_consumption) query.fuel_consumption = filters.fuel_consumption;
        if (filters.price) query.price = filters.price;
        if (filters.country) query.country = filters.country;
        if (filters.acceleration) query.acceleration = filters.acceleration;

        const filteredCars = await Car.find(query);
        return filteredCars;
    } catch (error) {
        throw new Error("Error al filtrar coches: " + error.message);
    }
};

const getPaginatedCars = async (page, limit) => {
    try {
        const pageNumber = Math.max(1, page); // Asegura que la página mínima sea 1
        const limitNumber = Math.max(1, limit); // Asegura que el límite mínimo sea 1

        // Obtener el total de coches
        const totalCars = await Car.countDocuments();

        // Calcular cuántos documentos saltar (skip) y cuántos mostrar (limit)
        const cars = await Car.find()
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        return {
            currentPage: pageNumber,
            totalPages: Math.ceil(totalCars / limitNumber),
            totalCars,
            data: cars
        };
    } catch (error) {
        throw new Error("Error al obtener coches paginados: " + error.message);
    }
};

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
    getAllBrands,
    getGlobalStats,
    getPaginatedCars,
    filterCars
}
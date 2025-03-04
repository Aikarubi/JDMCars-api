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

        // Aplicar filtros con regex para campos de texto
        if (filters.brand) query.brand = { $regex: new RegExp(filters.brand, 'i') };
        if (filters.model) query.model = { $regex: new RegExp(filters.model, 'i') };
        if (filters.engine) query.engine = { $regex: new RegExp(filters.engine, 'i') };
        if (filters.transmission) query.transmission = { $regex: new RegExp(filters.transmission, 'i') };
        if (filters.drivetrain) query.drivetrain = { $regex: new RegExp(filters.drivetrain, 'i') };
        if (filters.fuel_consumption) query.fuel_consumption = { $regex: new RegExp(filters.fuel_consumption, 'i') };
        if (filters.price) query.price = { $regex: new RegExp(filters.price, 'i') };
        if (filters.country) query.country = { $regex: new RegExp(filters.country, 'i') };
        if (filters.acceleration) query.acceleration = { $regex: new RegExp(filters.acceleration, 'i') };

        // Aplicar filtros para campos numéricos
        if (filters.horsepower) query.horsepower = parseInt(filters.horsepower);
        if (filters.max_speed) query.max_speed = parseInt(filters.max_speed);
        if (filters.weight) query.weight = parseInt(filters.weight);

        // Filtro especial para year como objeto
        if (filters.year) {
            const year = parseInt(filters.year);
            query["year.start"] = { $lte: year };  // start <= year
            query["year.end"] = { $gte: year };    // end >= year
        }

        console.log("📋 Filtros aplicados:", query);  // 🔍 Ver qué filtros se aplican

        const filteredCars = await Car.find(query);

        console.log("📊 Resultados obtenidos:", filteredCars);  // 🔍 Ver qué devuelve la consulta

        return filteredCars;
    } catch (error) {
        console.log("❌ Error en filterCars:", error.message);
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
    filterCars,
    getPaginatedCars,
}
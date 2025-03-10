const Car = require('../database/Car');

const getAllCars = async (filterParams) => {
    try {
        const filters = {};

        if (filterParams.brand) {
            filters.brand = { $regex: filterParams.brand, $options: "i" };
        }
        if (filterParams.model) {
            filters.model = { $regex: filterParams.model, $options: "i" };
        }
        if (filterParams.horsepower) {
            filters.horsepower = filterParams.horsepower;
        }
        if (filterParams.engine) {
            filters.engine = { $regex: filterParams.engine, $options: "i" };
        }
        if (filterParams.country) {
            filters.country = { $regex: filterParams.country, $options: "i" };
        }
        if (filterParams.yearStart || filterParams.yearEnd) {
            // Si proporcionan el inicio del año, lo agregamos al filtro
            if (filterParams.yearStart) {
                filters["year.start"] = { $gte: filterParams.yearStart };
            }

            // Si proporcionan el final del año, lo agregamos al filtro
            if (filterParams.yearEnd) {
                filters["year.end"] = { $lte: filterParams.yearEnd };
            }
        }
        if (filterParams.transmission) {
            filters.transmission = { $regex: filterParams.transmission, $options: "i" };
        }
        if (filterParams.drivetrain) {
            filters.drivetrain = { $regex: filterParams.drivetrain, $options: "i" };
        }
        if (filterParams.max_speed) {
            filters.max_speed = filterParams.max_speed;
        }
        if (filterParams.weight) {
            filters.weight = filterParams.weight;
        }
        if (filterParams.fuel_consumption) {
            filters.fuel_consumption = { $regex: filterParams.fuel_consumption, $options: "i" };
        }
        if (filterParams.price) {
            filters.price = filterParams.price;
        }
        if (filterParams.acceleration) {
            filters.acceleration = { $regex: filterParams.acceleration.split(" ")[0], $options: "i" };
        }        



        if (Object.keys(filters).length > 0) {
            return await Car.find(filters);
        }
        console.log("Filtros aplicados:", filters);
        return await Car.find();
    } catch (error) {
        console.error("Error en getAllCars:", error);
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
}
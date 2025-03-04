const carService = require('../services/carService');

const getAllCars = async (req, res) => {
    try {
        const allCars = await carService.getAllCars(); 
        res.send({ status: "OK", data: allCars });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllBrands = async (req, res) => {
    try {
        const allBrands = await carService.getAllBrands(); 
        res.send({ status: "OK", data: allBrands });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getOneCar = async (req, res) => {
    try {
        const id = req.params.id;  // Recibimos el ID como string
        const car = await carService.getOneCar(id);
        res.send({ status: "OK", data: car });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRandomCar = async (req, res) => {
    try {
        const randomCar = await carService.getRandomCar();
        res.send({ status: "OK", data: randomCar });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGlobalStats = async (req, res) => {
    try {
        const stats = await carService.getGlobalStats();
        res.send({ status: "OK", data: stats });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const filterCars = async (req, res) => {
    try {
        const filters = req.query;  // Obtiene los filtros de la URL
        console.log("🛠️  Filtros recibidos en el controlador:", filters);  // Ver qué filtros llegan

        const filteredCars = await carService.filterCars(filters);  // Llama a la función con filtros

        console.log("✅ Coches filtrados devueltos:", filteredCars);  // Ver el resultado antes de enviar la respuesta

        res.send({ status: "OK", data: filteredCars });
    } catch (error) {
        console.log("❌ Error en filterCars (controlador):", error.message);
        res.status(500).json({ error: error.message });
    }
};

const getPaginatedCars = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const paginatedResult = await carService.getPaginatedCars(page, limit);
        res.send({ status: "OK", data: paginatedResult });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
    getAllBrands,
    getGlobalStats,
    filterCars,
    getPaginatedCars
}
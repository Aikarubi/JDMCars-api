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

const getPaginatedCars = (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Parámetros con valores predeterminados
    const paginatedResult = carService.getPaginatedCars(Number(page), Number(limit));
    res.send({ status: "OK", data: paginatedResult });
};

module.exports = {
    getAllCars,
    getOneCar,
    getRandomCar,
    getAllBrands,
    getGlobalStats,
    getPaginatedCars
 
}
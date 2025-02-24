const carService = require('../services/carService');

const getAllCars = async (req, res) => {
    try {
        const allCars = await carService.getAllCars(); // 🔹 Esperamos la respuesta de la DB
        res.send({ status: "OK", data: allCars });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllBrands = (req, res) => {
    const allBrands = carService.getAllBrands();
    res.send({ status: "OK", data: allBrands });
}

const getOneCar = (req, res) => {
    const id = req.params.id;
    const car = carService.getOneCar(id);
    res.send({ status: "OK", data: car });
}

const getRandomCar = (req, res) => {
    const randomCar = carService.getRandomCar();
    res.send({ status: "OK", data: randomCar });
}

const getGlobalStats = (req, res) => {
    const stats = carService.getGlobalStats();
    res.send({ status: "OK", data: stats });
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
//Logica de las rutas

const path = require('path');
const fs = require('fs');

//Leer los datos del archivo JSON
const carsFilePath = path.join(__dirname, '../../data/cars.json');
let carsData = JSON.parse(fs.readFileSync(carsFilePath, 'utf-8'));

//Funcion para obtener todos los coches
const getAllCars = (req, res) => {
    res.json(carsData);
}

//Funcion para obtener un coche por su id
const getCarById = (req, res) => {
    const carId = req.params.id;
    const car = carsData.find(car => car.id === carId);
    
    if (car) {
        res.json(car);
    } else {
        res.status(404).send('Coche no encontrado');
    }
};

module.exports = {
    getAllCars,
    getCarById
};
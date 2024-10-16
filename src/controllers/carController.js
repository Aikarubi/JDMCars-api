//Logica de las rutas

const path = require('path');
const fs = require('fs');

//Leer los datos del archivo JSON
const carsFilePath = path.join(__dirname, '../../data/cars.json');
console.log('Ruta del archivo cars.json:', carsFilePath);
/*let carsData = JSON.parse(fs.readFileSync(carsFilePath, 'utf-8'));*/

let carsData;
try {
    carsData = JSON.parse(fs.readFileSync(carsFilePath, 'utf-8'));
    console.log('Datos de coches cargados con éxito');
} catch (error) {
    console.error('Error al leer o parsear el archivo JSON:', error);
}

//Funcion para obtener todos los coches
const getAllCars = (req, res) => {
    console.log('getAllCars ejecutado');
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
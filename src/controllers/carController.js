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

//Función para buscar coches por varios parámetros
/*const searchCars = (req, res) => {
    let { brand, model, year, engine, horsepower, transmission, drivetrain, max_speed } = req.query;

    //Convertir rangos de año si están presentes
    let yearRange = year ? year.split('-').map(Number) : null;

    //Filtrar los coches según los parámetros de búsqueda
    let filteredCars = carsData.filter(car => {
        let matches = true;

        if (brand && car.brand.toLowerCase() !== brand.toLowerCase()) matches = false;
        if (model && car.model.toLowerCase() !== model.toLowerCase()) matches = false;
        if (yearRange && (car.year < yearRange[0] || car.year > yearRange[1])) matches = false;
        if (engine && car.engine.toLowerCase() !== engine.toLowerCase()) matches = false;
        if (horsepower && car.horsepower !== Number(horsepower)) matches = false;
        if (transmission && car.transmission.toLowerCase() !== transmission.toLowerCase()) matches = false;
        if (drivetrain && car.drivetrain.toLowerCase() !== drivetrain.toLowerCase()) matches = false;
        if (max_speed && car.max_speed.toLowerCase() !== max_speed.toLowerCase()) matches = false;

        return matches;
    });

    if (filteredCars.length > 0) {
        res.json(filteredCars);
    } else {
        res.status(404).send('No se encontraron coches que coincidan con los parámetros de búsqueda');
    }

};*/

//Función para buscar coches por marca
const searchCarsByBrand = (req, res) => {
    const brand = req.params.brand.toLowerCase();
    const filteredCars = carsData.filter(car => car.brand.toLowerCase() === brand);
    if (filteredCars.length > 0) {
        res.json(filteredCars);
    } else {
        res.status(404).send('No se encontraron coches que coincidan con la marca');
    }
};

module.exports = {
    getAllCars,
    getCarById,
    searchCarsByBrand
    //searchCars
};
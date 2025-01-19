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

//

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

//Función para obtener coches aleatorios
/*const randomCars = (req, res) => {
    console.log('randomCars ejecutado');
    if (carsData.length === 0) {
        return res.status(404).json({ message: "No hay coches disponibles." });
    }

    const randomIndex = Math.floor(Math.random() * carsData.length); // Generar un índice aleatorio
    const randomCar = carsData[randomIndex]; // Obtener el coche en ese índice

    res.status(200).json(randomCar); // Enviar el coche como respuesta
};*/

// Funcion prueba

const testFunction = (req, res) => {
    console.log('testFunction ejecutado');
    res.json({ message: 'Funcionando correctamente' });
};

module.exports = {
    getAllCars,
    getCarById,
    searchCarsByBrand,
    //randomCars
    testFunction
};
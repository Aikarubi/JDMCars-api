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
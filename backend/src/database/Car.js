//const DB = require('./database');
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Object,
    engine: String,
    horsepower: Number,
    transmission: String,
    drivetrain: String,
    max_speed: Number,
    weight: Number,
    fuel_consumption: String,
    price: String,
    country: String,
    description: String,
    acceleration: String,
    image: String,
});

// Creamos el modelo Car basado en el esquema
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
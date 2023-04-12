const mongoose = require('mongoose');
const db = require('../config/db');

// Initialize a schema for db
const { Schema } = mongoose;

// Constructor of Schema
const driverSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    plateNum: {
        type: String,
        required: true,
        unique: true
    },
    vehicleColor: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNum: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    stickId: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

// Initialize a model and pass the driverSchema constructor
const DriverModel = db.model('drivers', driverSchema);

module.exports = DriverModel;

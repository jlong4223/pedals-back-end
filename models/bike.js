// requiring mongoose and schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// creates the schema for mongodb
const bikeSchema = new Schema({
    name: String,
    type: String, 
    location: String,
    brand: String,
    size: String, 
    availableTill: String, 
    imgURL: String
},{
    timestamps: true
})

module.exports = mongoose.model('Bike', bikeSchema)
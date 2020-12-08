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

// Here's an example of Mongoose Middleware
// Ensure that initials are uppercase & not longer than 3 characters
bikeSchema.pre('save', function (next) {
    this.initials = this.initials.substr(0, 3).toUpperCase();
    next();
  });

module.exports = mongoose.model('Bike', bikeSchema)
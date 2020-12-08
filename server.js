// requiring the modules
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

// requires .env file and require DB module
require('dotenv').config()
require('./config/database')

// TODO require routes 
const bikesRouter = require('./routes/bikes')

// running express 
const app = express()

// middleware being used
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// TODO use routes here 
app.use('/', bikesRouter)

// // playground below 
// const Bike = require('./models/bike')
// Bike.create({
//     name: 'X-Caliber',
//     type: 'Mountain/XC', 
//     location: 'Austin, TX 78745',
//     brand: 'Trek', 
//     size: 'Adult Lg',
//     availableTill: 'December 1, 2020',
//     imgURL: 'https://i.imgur.com/QmOwXx9.jpg'
// }, function(err,doc){
//     console.log(doc)
// })

// defining and running the app
const port = process.env.PORT || 3001
app.listen(port, function(){
    console.log(`Express is running on port: ${port}`)
})
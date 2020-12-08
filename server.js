// requiring the modules
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

// requires .env file and require DB module
require('dotenv').config()
require('./config/database')

// TODO require routes 


// running express 
const app = express()

// middleware being used
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

// TODO use routes here 


// defining and running the app
const port = process.env.PORT || 3001
app.listen(port, function(){
    console.log(`Express is running on port: ${port}`)
})
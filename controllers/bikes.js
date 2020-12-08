const Bike = require('../models/bike')

module.exports={
    showBikes, 
    // create
}

// showbike function to get the info as JSON
async function showBikes(req,res){
    const bikes = await Bike.find({})
    console.log(bikes)
    res.json(bikes)
}

// TODO make the create function and export it
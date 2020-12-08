const Bike = require('../models/bike')

module.exports={
    showBikes, 
    create
}

// showbike function to get the info as JSON
async function showBikes(req,res){
    const bikes = await Bike.find({})
    console.log(bikes)
    res.json(bikes)
}

// TODO make the create function and export it

async function create(req, res) {
    try {
      await Bike.create(req.body);
      // Use the showBikes action to return the list
      showBikes(req, res);
    } catch (err) {
      res.json({err});
    }
  }
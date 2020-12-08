const Bike = require('../models/bike')

module.exports={
    showBikes, 
    create
}

async function create(req, res) {
    console.log(req.user)
    try {
      await Bike.create(req.body);
      // Use the showBikes action to return the list
      showBikes(req, res);
    } catch (err) {
      res.json({err});
    }
  }

// showbike function to get the info as JSON
async function showBikes(req,res){
    const bikes = await Bike.find({})
    console.log(bikes)
    res.json(bikes)
}

// TODO make the create function and export it

const { findByIdAndUpdate } = require("../models/bike");
const Bike = require("../models/bike");

module.exports = {
  showBikes,
  showOneBike,
  create,
  deleteBike,
  updateBike,
};

async function create(req, res) {
  console.log(req.user);
  try {
    await Bike.create(req.body);
    // Use the showBikes action to return the list
    showBikes(req, res);
  } catch (err) {
    res.json({ err });
  }
}

// showbike function to get the info as JSON
async function showBikes(req, res) {
  const bikes = await Bike.find({});
  // console.log(bikes)
  res.json(bikes);
}

async function showOneBike(req, res) {
  try {
    const oneBike = await Bike.findById(req.params.id);
    res.json(oneBike);
  } catch (err) {
    res.json(err);
  }
}

async function deleteBike(req, res) {
  try {
    const deletedBike = await Bike.findByIdAndDelete(req.params.id);
    res.json(deletedBike);
  } catch (err) {
    res.json(err);
  }
}

async function updateBike(req, res) {
  try {
    const updateTheBike = await Bike.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateTheBike);
  } catch (err) {
    res.json(err);
  }
}

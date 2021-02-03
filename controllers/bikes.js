const Bike = require("../models/bike");

module.exports = {
  showBikes,
  showOneBike,
  create,
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

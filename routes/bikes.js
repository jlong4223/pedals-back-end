const express = require("express");
const router = express.Router();
// defined the bikesctrl in the controller
const bikesCtrl = require("../controllers/bikes");

// read routes here
router.get("/", bikesCtrl.showBikes);
router.get("/:id", bikesCtrl.showOneBike);

/*---------------- Protected Routes ----------------*/
/*--- Process the token for only the routes below: adds check auth so if user isnt signed in or token is not valid, gives not authorized err ---*/
router.use(require("../config/auth"));

router.post("/", checkAuth, bikesCtrl.create);
router.delete("/:id", checkAuth, bikesCtrl.deleteBike);
router.put("/:id", checkAuth, bikesCtrl.updateBike);

/* restrict access so only valid authed users can access route - adding this function to any routes that you want protected by auth */
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "not authorized" });
}

module.exports = router;

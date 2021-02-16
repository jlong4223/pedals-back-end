const express = require("express");
const router = express.Router();
// defined the bikesctrl in the controller
const bikesCtrl = require("../controllers/bikes");

// TODO read routes here
router.get("/", bikesCtrl.showBikes);
router.get("/:id", bikesCtrl.showOneBike);
router.post("/", bikesCtrl.create);
router.delete("/:id", bikesCtrl.deleteBike);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// TODO CUD routes here (create, update, delete)
router.use(require("../config/auth"));
// adds check auth so if user isnt signed in or token is not valid, gives not authorized err
// TODO if you want create post function to be used by only logged in users, do the following:
// router.post('/', checkAuth, bikesCtrl.create)

//restrict access so only valid authed users can access route-
// TODO add this function to any routes that you want protected by auth
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "not authorized" });
}

module.exports = router;

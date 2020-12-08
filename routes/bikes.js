const express = require('express')
const router = express.Router()
// defined the bikesctrl in the controller
const bikesCtrl = require('../controllers/bikes')

router.get('/', bikesCtrl.showBikes)
/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../config/auth'));
// adds check auth so if user isnt signed in or token is not valid, gives not authorized err
router.post('/', checkAuth, bikesCtrl.create)

//restrict access so only valid authed users can access route
function checkAuth(req, res, next){
    if (req.user) return next()
    return res.status(401).json({msg: 'not authorized'})
}


module.exports = router
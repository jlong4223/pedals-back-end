const express = require('express')
const router = express.Router()
// defined the bikesctrl in the controller
const bikesCtrl = require('../controllers/bikes')

router.get('/', bikesCtrl.showBikes)
router.post('/', bikesCtrl.create)

module.exports = router
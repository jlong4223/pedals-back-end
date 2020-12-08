const express = require('express')
const router = express.Router()
// TODO define the bikesctrl in the controller
const bikesCtrl = require('../controllers/bikes')

router.get('/', bikesCtrl.showBikes)
// TODO router.post('/', bikesCtrl.create)

module.exports = router
const express = require('express')
const router = express.Router()
const formRoute = require('./service/formRoute')

router.use('/', formRoute)

module.exports = router
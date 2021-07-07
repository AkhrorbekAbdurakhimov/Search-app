const express = require('express')
const {GET, SEARCH} = require('./controller')

const userRoute = express.Router()
userRoute.route('/users')
    .get(GET)
    .search(SEARCH)

module.exports = userRoute
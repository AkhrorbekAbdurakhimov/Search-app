const express = require('express')
const {GET, SEARCH} = require('./controller')

const movieRoute = express.Router()
movieRoute.route('/movies')
    .get(GET)
    .search(SEARCH)

module.exports = movieRoute
const express = require('express')
const {GET, SEARCH} = require('./controller')

const bookRoute = express.Router()
bookRoute.route('/books')
    .get(GET)
    .search(SEARCH)

module.exports = bookRoute
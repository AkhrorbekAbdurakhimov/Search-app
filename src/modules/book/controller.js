const {fetch} = require('./../../database')

const GET = async (req, res) => {
    let books = await fetch('SELECT * FROM books;')
    res.json(books)
}

const SEARCH = async (req, res) => {
    let searched = req.query.text
    let query = `
        SELECT * FROM books
        WHERE book_name ILIKE '%${searched}%' OR
        release_year ILIKE '%${searched}%' OR
        genre ILIKE '%${searched}%';
    `
    let books = await fetch(query)
    res.json(books)
}

module.exports = {GET, SEARCH}
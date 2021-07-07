const {fetch} = require('./../../database')

const GET = async (req, res) => {
    let movies = await fetch('SELECT * FROM movies;')
    res.json(movies)
}

const SEARCH = async (req, res) => {
    let searched = req.query.text
    let query = `
        SELECT * FROM movies
        WHERE movie_name ILIKE '%${searched}%' OR
        release_year ILIKE '%${searched}%' OR
        genre ILIKE '%${searched}%';
    `
    let movies = await fetch(query)
    res.json(movies)
}

module.exports = {GET, SEARCH}
const {fetch} = require('./../../database')

const GET = async (req, res) => {
    let users = await fetch('SELECT * FROM users;')
    res.json(users)
}

const SEARCH = async (req, res) => {
    let searched = req.query.text
    let query = `
        SELECT * FROM users
        WHERE first_name ILIKE '%${searched}%' OR
        last_name ILIKE '%${searched}%' OR
        phone_number ILIKE '%${searched}%';
    `
    let users = await fetch(query)
    res.json(users)
}

module.exports = {GET, SEARCH}
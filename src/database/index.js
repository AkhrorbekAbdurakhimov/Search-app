const {Pool} = require('pg')

let pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345',
    database: 'searchdb'
})

const fetch = async (query, ...params) => {
    let client = await pool.connect()
    try {
        let {rows} = await client.query(query, params.length ? params : null)
        return rows
    } catch (err) {
        console.log(err)
    } finally {
        client.release()
    }
}

module.exports = {fetch}
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        password: 'p5-H\\"H>.#%gR>Uj4',
        database: 'election'
    },
);

module.exports = db;
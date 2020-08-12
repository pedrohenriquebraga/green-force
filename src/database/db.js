const { Database } = require("sqlite3")

const sqlite3 = require("sqlite3").verbose()

module.exports = db
const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            city TEXT,
            state TEXT,
            email TEXT,
            title TEXT,
            desc TEXT,
            image TEXT
        )
    `)
})


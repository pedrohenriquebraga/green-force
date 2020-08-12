const { Database } = require("sqlite3")

const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            city TEXT,
            state TEXT,
            title TEXT,
            desc TEXT,
            image TEXT
        )
    `)
})

module.exports = db

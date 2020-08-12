const express = require("express")
const cors = require("cors")
const db = require("./database/db.js")
const app = express()

const corsOpitions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}

app.use(cors())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/" ,(req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

app.get("/new-tree", (req, res) => {
    return res.sendFile(__dirname + "/views/form.html")
})

app.post("/save", (req, res) => {
    const dataOfPost = req.body
    const query = `
        INSERT INTO posts (
            name,
            email,
            city,
            state,
            title,
            desc,
            image
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const values = [
        dataOfPost.name,
        dataOfPost.email,
        dataOfPost.state,
        dataOfPost.city,
        dataOfPost.title,
        dataOfPost.desc,
        dataOfPost.image
    ]

    db.run(query, values, (err) => {
        if (err) {
            console.error(err)
            return res.sendFile(__dirname + "/views/response-error.html")
        } else {
            return res.sendFile(__dirname + "/views/response-success.html")
        }
    })
})

app.get("/api", (req, res) => {
    db.all(`SELECT name, title, desc, image FROM posts`, (err, rows) => {
        if (err) {
            return res.json({"error":"true"})
        } else {
            return res.json(rows)
        }
    })
})


app.listen("3000")
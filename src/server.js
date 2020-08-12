const express = require("express")
// const db = require("./database/db")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/" ,(req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

app.get("/new-tree", (req, res) => {
    return res.sendFile(__dirname + "/views/form.html")
})

app.post("/save", (req, res) => {
    console.log(req.body)
})

app.listen("3000")
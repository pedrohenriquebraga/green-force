const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/" ,(req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

app.get("/new-tree", (req, res) => {
    return res.sendFile(__dirname + "/views/form.html")
})

app.listen("3000")
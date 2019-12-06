const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world from node js")
})

const port = 3000
app.listen(port, () => {console.log(`A node Js API is listening on port ${port}`)})
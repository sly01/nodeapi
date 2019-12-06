const express = require("express")
const app = express()

const postRoutes = require('./routes/post')

app.get("/", postRoutes.getPosts)

const port = 3000
app.listen(port, () => {console.log(`A node Js API is listening on port ${port}`)})
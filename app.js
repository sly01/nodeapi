const express = require("express")
const app = express()
const morgan = require("morgan")

const { getPosts } = require('./routes/post')

// middleware
app.use(morgan('dev'))

app.get("/", getPosts)

const port = 3000
app.listen(port, () => {console.log(`A node Js API is listening on port ${port}`)})
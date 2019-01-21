const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.port || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, "./app/routing/apiRoutes"))(app)
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app)

app.listen(process.env.PORT || 8080, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})
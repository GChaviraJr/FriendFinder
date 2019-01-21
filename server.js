const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.port || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './app/public')))

require(path.join(__dirname, "./app/routing/apiRoutes"))(app)
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app)

app.listen(PORT, function() {
    console.log('Server running on ' + PORT)
})
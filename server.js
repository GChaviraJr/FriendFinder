const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const PORT = process.env.port || 8080

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


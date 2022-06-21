const express = require('express')
const app = express()
const port = 3000
const web =require('./routes/web.js')
const connectDB = require('./db/db_connect.js');
var bodyParser = require('body-parser')


connectDB()
// ejs setup
app.set('view engine','ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// static files
app.use(express.static('public'))
// route load 
app.use('/',web)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
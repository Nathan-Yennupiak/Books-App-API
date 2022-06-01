const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const connectDB = require('./config/db')
// require('dotenv').config({ path: 'ENV_FILENAME' });

//INITIALIZE EXPRESS
const app = express()
app.use(bodyParser.json())

//LOAD CONFIG FILE
dotenv.config({path: './config/config.env'})

//CONNECT DATABASE
connectDB()

//ADD ROUTE
app.use('/', require('./routes/bookRoute'))

//LISTEN TO PORT
app.listen(process.env.PORT || 3000)



const express = require ("express");
require('dotenv').config()
const mongoose = require('mongoose')

const app = express();

app.use(express.json())
app.use(require('./routes'))

mongoose.connect(process.env.MongoURI)
        .then(  console.log('DB Connected'))
        .catch((err) => console.log(err) )

PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{ console.log(`Server is running on ${PORT}`) })
const express = require('express')
const bodyParser = require('body-parser')
const main = require('./routes/main')
const services = require('./routes/Services')
const mongoose = require('mongoose')

const app = express()

//middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine','pug')

const uri = "mongodb+srv://Samprit:samprit@cluster0.ziqcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err) console.log(err)
    else console.log("Database Connected")
})

app.use('/',main)
app.use('/services',services)

//server
const port = 5001
app.listen(port,()=> console.log(`Server listening on ${port}`))
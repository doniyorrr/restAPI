const express = require(`express`)
const bodyParser = require(`body-parser`)
const path = require (`path`)
const mongoose = require(`mongoose`)
const port = 3000
const rIndex = require(`./routers/index`)
const app =express()

// settings engine

app.set(`view engine` , `pug`)
app.set(`views`, path.join(__dirname , `views`))

// settings mongoose

mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on(`open` , ()=>{
    console.log(`MongoDB running`)
})
db.on(`error` , (err)=>{
    console.log(`MongoDB error`)
})

//  static folder

app.use(express.static(path.join(__dirname , `public`)))

// settings body-parser

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(rIndex)

app.listen(port , ()=>{
    console.log(`server running`)
} )
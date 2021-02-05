const express = require(`express`)
const router = express.Router()

app.get(`/` , (req , res ) =>{
    res.send(`salom method of get`)
})
app.post(`/` , (req , res ) =>{
    res.send(`salom method of post`)
})


module.exports = router
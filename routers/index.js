const express = require(`express`)
const router = express.Router()
const movies = require(`../model/schema`)

router.get(`/` , (req , res ) =>{
    res.send(`salom method of get`)
})
router.post(`/` , (req , res ) =>{
    // const { title , category , country, year , director_id , imdb_score}=req.body
    const db = new movies(req.body)
    const promise = db.save()
        promise.then(data =>{
            res.json(data)
        })
        .catch(err=>{
            console.log(err)
        })

})



module.exports = router
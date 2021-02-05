const express = require(`express`)
const router = express.Router()
const movies = require(`../model/schema`)

// Create a new director.
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
//  List all directors.
router.get(`/` , (req , res ) =>{
    const promise = movies.find({})
    promise.then(data=>{
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
    })
})
//  Get a movie.
router.get(`/:movie_id`, (req , res ) =>{
    const promise = movies.findById(req.params.movie_id)
    promise.then(data=>{
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
    })
})
//  Update a movie with new info.
router.put(`/:movie_id` , (req , res )=>{
    const promise = movies.findByIdAndUpdate(
        req.params.movie_id,
        req.body
    )
    promise.then(data =>{
        res.json(data)
    }).catch(err =>{
        console.log(err)
    })
})

//  Delete a movie.
router.delete(`/:movie_id` , (req , res )=>{
    const promise = movies.findByIdAndRemove(req.params.movie_id, )
    promise.then(data =>{
        res.json(data)
    }).catch(err =>{
        console.log(err)
    })
})
// Get the top 10 movies.
router.get(`/top/top10`, (req , res ) =>{
    const promise = movies.find({}).sort({imdb_score : -1}).limit(10)
    promise.then(data=>{
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
    })
})

// Movies between two dates.
router.get(`/:start_year/:end_year`, (req , res ) =>{
    const {start_year , end_year} = req.params
    const promise = movies.find({
        year: {"$gte" :parseInt(start_year) , "$lte" : parseInt(end_year)}
    }).sort({year: 1})
    promise.then(data=>{
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
    })
})

module.exports = router
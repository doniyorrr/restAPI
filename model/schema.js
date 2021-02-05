const mongoose = require(`mongoose`)
const schema =mongoose.Schema
const movieSchema = new schema({
    title:{
        type: String,
        required:true
    },
    category: String,
    country: String,
    year: Number,
    director_id: schema.Types.ObjectId,
    imdb_score:Number

})

module.exports = mongoose.model(`film ` , movieSchema)



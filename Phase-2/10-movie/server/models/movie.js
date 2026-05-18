import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    arr_rating: {
        type: [Number],
        required: true,
        default: []
    },
    rating:{
        type: Number,
        required: true,
        default : 0
    }
})

const Movie = mongoose.model('Movie',movieSchema)
export default Movie
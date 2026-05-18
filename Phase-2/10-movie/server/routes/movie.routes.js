import express from 'express'
import { getAllMovies , getMovieById , listMovies , updateRatings} from '../controllers/movie.controller.js'

const PORT=3000
const movieRouter = express.Router()

movieRouter.get('/movies/',getAllMovies)
movieRouter.get('/movie/:id/',getMovieById)

movieRouter.post('/newMovies/',listMovies)

movieRouter.put('/ratings/',updateRatings)

movieRouter.use((req,res)=>{
    res.status(404).send({
        status: false,
        message: 'Movie route not found'
    })
})
export default movieRouter
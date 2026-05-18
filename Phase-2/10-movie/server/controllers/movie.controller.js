import Movie from "../models/movie.js";

const getAllMovies = async (req, res)=>{
    try {
       const movies = await Movie.find()
        if(!movies){
            return res.status(400).send({
                success: false,
                message: 'Movie not found'
            })
        }

        res.send({
            success: true,
            message: 'Movie fetched successfully',
            data: movies
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const getMovieById = async (req, res) => {
    try {
        const {id} = req.params
        if(!id || id.length!=24){
            return res.send({
                success: false,
                message: 'Invalid id , try again..'
            })
        }

        const movie = await Movie.findById(id)
        if(!movie){
            return res.send({
                success: false,
                message: " No movie with this Id"
            })
        }

        res.send({
            success: true,
            message: 'Movie fetched successfully',
            data: movie
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const listMovies = async (req, res)=>{
    try {
        if(!req.body){
            return res.send({
                success: false,
                message: 'Body is missing',
                data: null
            })
        }
        const {title, description} =req.body
        if(!title || !description){
            return res.status(400).send({
                success: false,
                message: 'Incomplete data'
            })
        }

        const existingMovies= await Movie.findOne({title : title})
        
        if(existingMovies){
            return res.status(400).send({
                success: false,
                message: 'Movie already existed',
            })
        }
        const newMovie = Movie({title , description})
        await newMovie.save()

        res.send({
            success: true,
            message: 'Movie listed successfully',
            data: newMovie
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

const updateRatings = async (req , res)=>{
    try {
        if(!req.body){
            return res.status(400).send({
                success: false,
                message: 'body is missing',
                data: null
            })
        }

        let {id, rating} =req.body
        if(!id || id.length != 24){
            return res.status(400).send({
                success: false,
                message: 'Inavlid Id please enter valid Id'
            })
        }

        rating =Number(req.body.rating)
        if(isNaN(rating) || rating <1 || rating >5){
            return res.status(400).send({
                success: false,
                message: 'please enter valid rating'
            })
        }

        const existingMovies = await Movie.findById(id)

        if(!existingMovies){
            return res.status(400).send({
                success: false,
                message: 'No existing movie'
            })
        }

        const movie = await Movie.findById(id)
        
        movie.arr_rating.push(rating)
        movie.rating = movie.arr_rating.reduce((acc ,curr)=> acc + curr,0)/movie.arr_rating.length
        await movie.save()

        res.send({
            success: true,
            message: "Thanks for rating",
            data: movie
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

export {getAllMovies, getMovieById, listMovies, updateRatings}
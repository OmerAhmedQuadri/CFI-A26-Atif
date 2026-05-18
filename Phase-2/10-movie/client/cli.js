import rs from 'readline-sync'
import axios from 'axios'
import chalk from 'chalk'
import Movie from '../server/models/movie'

class CLI {
    #BASE_URL = 'http://localhost:3000/'
    constructor (){
        this.movies = null,
        this.selectedMovies = null,
        this.app = axios.create({
            baseURL: this.#BASE_URL,
            timeout: 3000,
            validateStatus : (status)=> status <500
        })
    }

    async start (){
        this.OPTIONS = {
            1:this.getAllMovies.bind(this),
            2:this.getMovieById.bind(this),
            3:this.listMovies.bind(this),
            4:this.updateRatings.bind(this)
        }

        console.log('===MOVIES===');
        console.log('1.getAllMovies');
        console.log('2.getMovieById');
        console.log('3.listMovies');
        console.log('4.updateMovies');
        console.log('0.Exit');
        
        const choice = rs.questionInt('Enter your choice: ')

        if(!choice){
            console.log(chalk.redBright('Exiting...'));
            process.exit(0)
        }

        if(!this.OPTIONS[choice]){
            console.log(chalk.redBright('Invalid option choice  , try again'));
            return await this.start()
        }

        await this.OPTIONS[choice]()
        await this.start()
    }

    async getAllMovies() {
        try {
            const response = await this.app.get('/api/movies/')

            if(!response.data.success) return console.log(chalk.redBright(response.data.message));
            this.movies = response.data.data
            this.printTask()
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async printTask() {
        console.log(chalk.blueBright('-------------------------------------------------------'));
        this.movies.forEach((x , i)=> {
            console.log('Movie '+ (i+1)+ ': '+ x.title);
            console.log('Title: '+ x.title);
            console.log('Description: '+ x.description);
            console.log('rating: '+ x.rating);
            console.log(chalk.blueBright('-------------------------------------------------------'));
            
        })
    }

    async getMovieById(id) {
        try {
            const id = rs.questionInt('Enter the Movie id: ')
            this.selectedMovies = Movie._id
            const response = await this.app.get(`/api/movie/${id}`)
            if(!response.data.success) return console.log(chalk.redBright(response.data.message));
            this.movies = response.data.data
            this.printTask()
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async listMovies(){
        try {
            const title = rs.question('Enter the movie title')
            const description = rs.question('Enter the movie description')
            const response = await this.app.post('/create',{
                title,
                description,
            })

            if(!response.data.success) return console.log(chalk.redBright(response.data.message));
            console.log(chalk.yellowBright(response.data.message));
            this.movies = [response.data.data]

        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async updateRatings () {
        try {
            const id = rs.questionInt('Enter the Movie Id to rate: ')
            const rate = parseInt(rs.questionInt('Enter the rating between 1 - 5: '))

            if(!rate){
                console.log(chalk.yellowBright('Please enter the rating!'));
                await this.updateRatings()
            }

            if(rate <1 || rate>5){
                console.log(chalk.redBright('Rating out of range , Enter a valid rating!'));
                await this.updateRatings()
            }

            const response = await this.app.put('/rating',{id,rate})
            if(!response.data.success) return console.log(chalk.redBright(response.data.message));

            console.log(chalk.greenBright(response.data.message));
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }
}

const cli = new CLI()
await cli.start()
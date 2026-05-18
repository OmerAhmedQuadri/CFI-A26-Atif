import express from 'express'
import { addBook, getAllBooks, getBookById } from './controllers/books.controller.js'

const app = express()
const PORT = 3000

app.use(express.json())




app.get('/api/books', getAllBooks)

app.get('/api/books/:id', getBookById)

app.post('/api/add', addBook)



app.listen(PORT, () => {
    console.log('Server is running at '+PORT);
})

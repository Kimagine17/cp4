
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/booksy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//All the book stuff
const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    photoPath: String,
    genre: String,
});
//book model
const Book = mongoose.model('Book', bookSchema);

//Create a Book
app.post('/api/books', async(req, res) => {
    const book = new Book ({
        name: req.body.name,
        description: req.body.description,
        photoPath: req.body.photoPath,
        genre: req.body.genre
    });
    try {
        await book.save();
        res.send(book);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Get the books
app.get('/api/books', async(req, res) => {
    try {
        let books = await Book.find();
        res.send(books);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//All the review stuff
const reviewSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    },
    review: String,
    person: String
    //TO-DO: photo: String,
});

//review model
const Review = mongoose.model('Review', reviewSchema);

app.post('/api/books/:bookID/reviews', async(req, res) => {
    try {
        let book = await Book.findOne({_id: req.params.bookID});
        if(!book) {
            res.send(404);
            return;
        }
        let review = new Review ({
            book: book,
            review: req.body.review,
            person: req.body.person,
        //TO-DO: photo: String,
        });
        await review.save();
        res.send(review);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Get the books
// app.get('/api/books', async(req, res) => {
//     try {
//         let books = await Book.find();
//         res.send(books);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

app.listen(3000, () => console.log('Server listening on port 3000!'));

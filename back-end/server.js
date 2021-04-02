
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

//GENRE: Schema, Model, POST, GET, UPDATE, DELETE
const genreSchema = new mongoose.Schema({
    name: String
});

//genre model
const Genre = mongoose.model('Genre', genreSchema);

//create a genre
app.post('/api/genres', async(req, res) => {
    const genre = new Genre ({
        name: req.body.name,
    });
    try {
        await genre.save();
        res.send(genre);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//get all the genres
app.get('/api/genres', async(req, res) => {
    try {
        let genres = await Genre.find();
        res.send(genres);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//update a genre
app.put('/api/genres/:genreID', async(req, res) => {
    try {
        let genre = await Genre.findOne({_id: req.params.genreID});
        if(!genre) {
            res.sendStatus(404);
            return;
        }
        genre.name = req.body.name;
        await genre.save();
        res.send(genre);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//delete a genre
app.delete('/api/genres/:genreID', async(req, res) => {
    try {
        let genre = await Genre.findOne({_id: req.params.genreID});
        if(!genre) {
            res.sendStatus(404);
            return;
        }
        await genre.delete();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//BOOK: Schema, Model, POST, GET for genre, UPDATE
const bookSchema = new mongoose.Schema({
    genre: {
        type: mongoose.Schema.ObjectId,
        ref: 'Genre'
    },
    name: String,
    description: String,
    photoPath: String,
});
//book model
const Book = mongoose.model('Book', bookSchema);

//Create a Book w/ Genre
app.post('/api/genres/:genreID/books', async(req, res) => {
    try {
        let genre = await Genre.findOne({_id: req.params.genreID});
        if (!genre) {
            res.send(404);
            return;
        }
        let book = new Book ({
            genre: genre,
            name: req.body.name,
            description: req.body.description,
            photoPath: req.body.photoPath,
        });
        await book.save();
        res.send(book);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// //Get all the books in the database
// app.get('/api/genres/books', async(req, res) => {
//     try {
//         let books = await Book.find();
//         res.send(books);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

//Get all the books for a genre 
app.get('/api/genres/:genreID/books', async(req, res) => {
    try {
        let genre = Genre.findOne({_id: req.params.genreID});
        if (!genre) {
            res.sendStatus(404);
            return;
        }
        console.log("Past the if");
        let books = await Book.find({genre:genre});
        console.log("Found the book");
        res.send(books);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Update a book
app.put('/api/genres/:genreID/books/:bookID', async(req, res) => {
    try {
        let book = await Book.findOne({_id: req.params.bookID, genre: req.params.genreID});
        if(!book) {
            res.sendStatus(404);
            return;
        }
        book.name = req.body.name;
        book.description = req.body.description;
        //photoPath = req.body.photoPath;
        await book.save();
        res.send(book);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Delete a book
app.delete('/api/genres/:genreID/books/:bookID', async(req, res) => {
    try {
        let book = await Book.findOne({_id: req.params.bookID, genre: req.params.genreID});
        if(!book) {
            res.sendStatus(404);
            return;
        }
        await book.delete();
        res.sendStatus(200);
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

//Get the reviews
app.get('/api/books/:bookID/reviews', async(req, res) => {
    try {
        let book = await Book.findOne({_id: req.params.bookID});
        if(!book) {
            res.send(404);
            return;
        }
        let reviews = await Review.find({book:book});
        res.send(reviews);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));


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





const reviewSchema = new mongoose.Schema({
    review: String,
    person: String,
    book: String,
    //TO-DO: photo: String,
});


app.listen(3000, () => console.log('Server listening on port 3000!'));

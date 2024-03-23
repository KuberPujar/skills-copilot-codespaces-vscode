// Create web server
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import comments from './comments.json';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Path: /comments
// Return all comments
app.get('/comments', function (req, res) {
    res.json(comments);
});

// Path: /comments
// Add a new comment
app.post('/comments', function (req, res) {
    const comment = {
        id: comments.length + 1,
    }
});

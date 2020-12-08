const express = require('express');
// import axios from "axios";

const pgp = require('pg-promise')();
const connection = `postgres://postgres:abc123**@localhost:5434/postgres`;
const db = pgp(connection);

const app = express();
app.use(express.json());

var movies = [{
    id: 0,
    name: "The Flash",
    type: "series",
    isPublished: false
}];

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port${port}...`));
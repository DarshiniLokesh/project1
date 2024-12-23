const express = require('express');
const Movie = require('../models/movie'); // Import the Movie model

const router = express.Router();

// Route to get the first 10 movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find().limit(10); // Fetch only the first 10 movies from the database
        res.json(movies); // Send the movies as a JSON response
    } catch (error) {
        res.status(500).send("Error retrieving movies: " + error.message);
    }
});

module.exports = router; // Ensure this line is present

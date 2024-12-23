const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    overview: { type: String },
    release_date: { type: String },
    genre_ids: { type: [Number] }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

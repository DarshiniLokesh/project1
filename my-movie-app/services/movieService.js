const axios = require('axios');
const Movie = require('../models/movie');
const config = require('../config/config.json');

const fetchAndInsertMovies = async () => {
    const apiKey = config.tmdbApiKey; 
    let totalMoviesFetched = 0;
    let currentPage = 1; 
    let totalPages;

    do {
        console.log(`Fetching movies from page ${currentPage}...`);
        
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`);
        console.log("API Response:", response.data); 
        
        const movies = response.data.results; 
        totalPages = response.data.total_pages; 

        if (!movies || movies.length === 0) {
            console.log("No movies found on this page.");
            break; 
        }

        console.log(`Fetched ${movies.length} movies from page ${currentPage}`);

        for (const movie of movies) {
            const newMovie = new Movie({
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                genre_ids: movie.genre_ids
            });

            await newMovie.save();
            console.log(`Inserted movie: ${movie.title}`);
        }

        totalMoviesFetched += movies.length; 
        currentPage++; 
    } while (currentPage <= totalPages); 

    console.log(`Total movies inserted: ${totalMoviesFetched}`);
};

module.exports = fetchAndInsertMovies;

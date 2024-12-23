const connectDB = require('../config/db');
const fetchAndInsertMovies = require('../services/movieService');

const runApp = async () => {
    await connectDB(); // Connect to the database
    await fetchAndInsertMovies(); // Fetch and insert movies
};

runApp().finally(() => {
    process.exit(); // Exit the process after completion
});

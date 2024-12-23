const express = require('express');
const connectDB = require('./config/db'); // Import the database connection function
const fetchAndInsertMovies = require('./services/movieService'); // Import the function to fetch and insert movies
const movieRoutes = require('./routes/movieRoutes'); // Import movie routes

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
const runApp = async () => {
    await connectDB(); // Connect to the database
 //   await fetchAndInsertMovies(); // Fetch and insert movies (if needed)
};

// Middleware to parse JSON requests
app.use(express.json());

// Use movie routes for '/movies' endpoint
app.use('/movies', movieRoutes); // Ensure this line has a valid string path

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Run the application
runApp().finally(() => {
    console.log("Finished running initial data insertion (if any).");
});


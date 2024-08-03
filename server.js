// server/server.js

const express = require('express');
const connectDB = require('./config/database'); // Import the database connection function
const cors = require('cors');
const bodyParser = require('body-parser');
const commentRoutes = require('./routes/commentRoutes'); // Import comment routes

// Initialize the Express application
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use comment routes for the /api/comments endpoint
app.use('/api/comments', commentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

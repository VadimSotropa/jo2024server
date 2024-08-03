// server/routes/commentRoutes.js

const express = require('express');
const router = express.Router();
const {
  createComment,
  getComments,
} = require('../controllers/commentController');

// Route for creating a new comment
router.post('/', createComment);

// Route for fetching comments with optional filters
router.get('/', getComments);

module.exports = router;

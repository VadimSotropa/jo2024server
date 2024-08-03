const Comment = require('../models/commentModel');

// Controller function for creating a new comment
exports.createComment = async (req, res) => {
  const { name, country, comment, feedbackType, feedbackCategories } = req.body;

  // Create a new comment instance
  const newComment = new Comment({
    name,
    country,
    comment,
    feedbackType,
    feedbackCategories,
  });

  try {
    // Save the comment to the database
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error('Error saving comment:', error); // Log the error
    res.status(500).json({ message: 'Failed to save comment', error: error.message });
  }
};

// Controller function for fetching comments with optional filters
exports.getComments = async (req, res) => {
  const { feedbackType, feedbackCategories } = req.query;
  const filter = {};

  // Apply optional filters based on query parameters
  if (feedbackType) filter.feedbackType = feedbackType;
  if (feedbackCategories) filter.feedbackCategories = { $in: feedbackCategories.split(',') };

  try {
    // Fetch comments from the database with the specified filters
    const comments = await Comment.find(filter).sort({ _id: -1 });
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error); // Log the error
    res.status(500).json({ message: 'Failed to fetch comments', error: error.message });
  }
};

// server/models/commentModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Import Schema from mongoose

const commentSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  comment: { type: String, required: true },
  feedbackType: { type: String, required: true, enum: ['Complaints', 'Thanks', 'Suggestions'] },
  feedbackCategories: {
    type: [String],
    enum: [
      'Organization',
      'Transportation',
      'Venues',
      'Matches',
      'Olympic Village',
      'Entertainment',
      'Accommodation',
      'Food/Drinks',
      'Other'
    ],
    required: true
  },
});

module.exports = mongoose.model('Comment', commentSchema);

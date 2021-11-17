const mongoose = require('mongoose');

var Comments = mongoose.model('Comments', {
    recipeId: {type: Number},
    commentText: {type: String},
    updatedAt: {type: String}
}, 'comments');

module.exports = { Comments };
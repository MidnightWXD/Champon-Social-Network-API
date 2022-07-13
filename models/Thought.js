const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      //must between 1 and 280 characters
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //use a getter to format the date on query
      get: (createdAtVal) => {
        return createdAtVal.toLocaleDateString();
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  //retrieve the length of the thought's reactions array field on query
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

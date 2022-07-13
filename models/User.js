const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      Trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      //validate email format
      validate: [validateEmail, 'Please fill a valid email address'],
      //match email format by using regex
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  //retrieve the length of the user's friends array field on query
  return this.friends.length;
});

const User = model('course', userSchema);

module.exports = User;

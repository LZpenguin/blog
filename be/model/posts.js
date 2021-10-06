const mongoose = require('mongoose')

const postschema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: false
  },
  content: {
    type: String,
    required: true
  },
  visited: {
    type: Number,
    required: false,
    default: 0
  }
})

const Post = mongoose.model('posts',postschema)

module.exports = {
  Post
}
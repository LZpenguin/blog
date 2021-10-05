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
  content: {
    type: String,
    required: true
  }
})

const Post = mongoose.model('posts',postschema)

module.exports = {
  Post
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Land = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: false }
  }
)

module.exports = mongoose.model('lands', Land)
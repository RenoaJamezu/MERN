const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
    require: true
  },
  reps: {
    type: Number,
    require: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)
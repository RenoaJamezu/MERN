const express = require('express')
const {
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
  createWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts) 

// GET single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router
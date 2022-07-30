const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController")
router
.get("/" , workoutController.getAllWorkouts)
.get("/:workoutsId", workoutController.getOneWorkouts)
.post("/:workoutsId", workoutController.createOneWorkout)
.put("/:workoutsId", workoutController.updateOneWorkouts )
.delete("/:workoutsId",workoutController.deleteOneWorkouts)
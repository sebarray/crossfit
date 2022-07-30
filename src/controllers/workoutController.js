const workoutService =require('../services/workoutService')

const getAllWorkouts=(req, res) =>{
    const allWorkouts = workoutService.getAllWorkouts()
    res.send("get all workouts ", allWorkouts)
}
const getOneWorkouts=(req, res) =>{
    const oneWorkouts = workoutService.getOneWorkouts()
    res.send("get one workouts ", oneWorkouts)
}
const deleteOneWorkouts=(req, res) =>{
    workoutService.deleteOneWorkouts()
    res.send(`delete wokout ${req.params.workoutsId}`)
}

const updateOneWorkouts=(req, res) =>{
    const updateOneWorkouts= workoutService.updateOneWorkouts()
    res.send(`update wokout ${req.params.workouts} `, updateOneWorkouts)
}

const createOneWorkout=(req, res) =>{
    const createOneWorkout= workoutService.createOneWorkout()
    res.send(`create wokout ${req.params.workouts} `, createOneWorkout)
}

module.exports ={
    getAllWorkouts,
    getOneWorkouts,
    deleteOneWorkouts,
    updateOneWorkouts,
    createOneWorkout
}
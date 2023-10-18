import { useState, memo } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutForm = ({data}) => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async(e) => {
        e.preventDefault()
        const workout = {title, load, reps}
        const respone = await fetch('/api/workouts', {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await respone.json()
        if(!respone.ok){
            setError(json.error)
        }
        if(respone.ok){
            dispatch({type: 'CREATE_WORKOUT', payload: json})
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
        }
    }
    console.log('workoutform render');
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label>Excersize Title: </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={data?.title ?? title}
             />
            <label>Load (in kg): </label>
            <input
                type="text"
                onChange={(e) => setLoad(e.target.value)}
                value={data?.load ?? load}
             />
            <label>Reps:</label>
            <input
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={data?.reps ?? reps}
             />
             <button>Add Workout</button>
             { error && <div className="error">{error}</div>}
        </form>
    )
}

export default  memo(WorkoutForm);
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({workout, dataDeliver}) => {
    const { dispatch } = useWorkoutsContext();
    const handleDelete = async () => {
        const response = await fetch('/api/workouts/'+workout._id, {
            method: "DELETE"
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }

    }
    const handleUpdate = async () => {
        const response = await fetch('/api/workouts/'+workout._id, {
            method: "GET"
        })
        const json = await response.json()
        if(response.ok){
            dataDeliver(json);
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load: </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
            <span onClick={handleDelete} className="material-symbols-outlined delete">delete</span>
            <span onClick={handleUpdate} className="material-symbols-outlined update">border_color</span>
        </div>
    )
}

export default WorkoutDetails;
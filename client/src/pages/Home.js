import { useCallback, useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            console.log(response);
            const json = await response.json();
            console.log(json);
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        };
        fetchWorkouts();
    }, [dispatch]);

    const dataDeliver = (json) => {
        setData(json)
    }
    console.log('home render');
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout, index) => <WorkoutDetails key={index} workout={workout} dataDeliver={dataDeliver}/>)}
            </div>
            <WorkoutForm data={data}/>
        </div>
    );
};

export default Home;

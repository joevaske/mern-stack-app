import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goal/goalSlice';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div className='goal'>
      <div>
        <h6>{new Date(goal.createdAt).toLocaleString('en-Us')}</h6>
      </div>
      <h3>{goal.text}</h3>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  );
};

export default GoalItem;

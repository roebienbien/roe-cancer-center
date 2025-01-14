import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { decrement, increment, incrementByAmount } from '../../../state/slices/counter-slice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-y-8 bg-blue-100 text-4xl'>
      <h2>Counter</h2>
      <span className='font-bold'>{count}</span>
      <div className='flex gap-8 text-2xl'>
        <button onClick={() => dispatch(decrement())} className='rounded-lg bg-blue-500 p-4 text-white shadow-lg'>
          Decrement
        </button>
        <button onClick={() => dispatch(increment())} className='rounded-lg bg-blue-500 p-4 text-white shadow-lg'>
          Increment
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))} className='rounded-lg bg-blue-500 p-4 text-white shadow-lg'>
          Increment by 10
        </button>
      </div>
    </div>
  );
};
export default Counter;

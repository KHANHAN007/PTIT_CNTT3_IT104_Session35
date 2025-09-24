import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, reset } from '../store/slices/counterSlice';
import type { RootState } from '../store/store';

function PTIT_CNTT3_IT104_Session35_Ex01() {
  const counter = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default PTIT_CNTT3_IT104_Session35_Ex01

import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from '../store/slices/counterSlice';

function PTIT_CNTT3_IT104_Session35_Ex01() {
    const counter = useSelector((state: any) => state.counter.count);
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

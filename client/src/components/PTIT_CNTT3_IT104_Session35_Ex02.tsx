
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { randomNumber } from '../store/slices/randomSlice';

function PTIT_CNTT3_IT104_Session35_Ex02() {
  const array = useSelector((state: RootState) => state.random.array);
  const dispatch = useDispatch();
  console.log(array)
  return (
    <div>
      <h1>List number: [{array.join(", ")}]</h1>
      <button onClick={() => dispatch(randomNumber())}>Random Number</button>
    </div>
  )
}

export default PTIT_CNTT3_IT104_Session35_Ex02

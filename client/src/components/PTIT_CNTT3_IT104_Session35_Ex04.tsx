import type { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from '../store/slices/toggleViewSlice';


function PTIT_CNTT3_IT104_Session35_Ex04() {
    const isListView = useSelector((state: RootState) => state.toggleView.isListView);
    const dispatch = useDispatch();
    console.log(isListView);
    return (
        <div>
            <button onClick={() => dispatch(toggleView())}>
                {isListView === 'column' ? 'Switch to Grid View' : 'Switch to List View'}
            </button>
            <div style={{ display: 'flex', flexDirection: isListView, gap: '10px', marginTop: '10px' }}>
                <div style={{ background: "red", width: "100px", height: "30px" }}>1</div>
                <div style={{ background: "red", width: "100px", height: "30px" }}>2</div>
                <div style={{ background: "red", width: "100px", height: "30px" }}>3</div>
            </div>
        </div>
    )
}

export default PTIT_CNTT3_IT104_Session35_Ex04
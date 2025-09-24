import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store/store'
import { toggle } from '../store/slices/toggleThemeSlice';

function PTIT_CNTT3_IT104_Session35_Ex03() {
    const toggleTheme = useSelector((state: RootState) => state.toggleTheme.darkMode);
    const dispatch = useDispatch();

    console.log(toggleTheme)
    return (
        <div style={{ width: '200px', height: '200px', backgroundColor: toggleTheme ? 'black' : 'white', color: toggleTheme ? 'white' : 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => dispatch(toggle())}>{toggleTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
        </div>
    )
}

export default PTIT_CNTT3_IT104_Session35_Ex03
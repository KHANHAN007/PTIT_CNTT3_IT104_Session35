import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { toggleFavorite } from '../store/slices/favoriteSlice';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

function PTIT_CNTT3_IT104_Session35_Ex07() {
    const dispatch = useDispatch();
    const { users, favorites } = useSelector((state: RootState) => state.favorite);
    console.log(users, favorites);
    return (
        <div>
            <h2>List Favorites User</h2>
            <ul>
                {users.map(user => (
                    <div
                        key={user.id}
                        style={{
                            marginBottom: '15px',
                            padding: '15px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            backgroundColor: favorites[user.id] ? '#fef2f2' : '#ffffff'
                        }}
                    >
                        <p style={{
                            margin: '0 0 8px 0',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}>
                            UserName: {user.userName}
                        </p>
                        <p style={{
                            margin: '0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            Favorites:
                            <button
                                onClick={() => dispatch(toggleFavorite(user.id))}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '24px',
                                    padding: '5px',
                                    borderRadius: '50%',
                                    transition: 'all 0.2s ease',
                                    color: favorites[user.id] ? '#ef4444' : '#d1d5db'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                title={favorites[user.id] ? 'Remove from favorites' : 'Add to favorites'}
                            >
                                {favorites[user.id] ? <HeartFilled /> : <HeartOutlined />}
                            </button>
                        </p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default PTIT_CNTT3_IT104_Session35_Ex07
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../../store/store';
import { logout } from '../../../store/slices/authSlice';

const HomePage: React.FC = () => {
    const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    if (!isLoggedIn || !user) {
        return null;
    }

    return (
        <div style={{
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '30px',
                color: '#333'
            }}>
                Trang Chủ
            </h1>

            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '20px'
            }}>
                <h3 style={{
                    marginBottom: '20px',
                    color: '#333'
                }}>
                    Thông tin tài khoản:
                </h3>

                <div style={{ marginBottom: '15px' }}>
                    <strong>User Name:</strong> {user.userName}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Email:</strong> {user.email}
                </div>

                <button
                    onClick={handleLogout}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    );
};

export default HomePage;
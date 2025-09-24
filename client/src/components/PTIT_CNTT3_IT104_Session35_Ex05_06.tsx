import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import type { RootState } from '../store/store';
import { toggleMenu } from '../store/slices/menuSlice';
import { toggleLanguage } from '../store/slices/languageSlice';
import {
    SmileOutlined,
    UserOutlined,
    DollarOutlined,
    BarChartOutlined,
    FileOutlined,
    LeftOutlined,
    RightOutlined,
    GlobalOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';

interface MenuItem {
    id: string;
    icon: React.ReactNode;
    labelKey: string;
}

const menuItems: MenuItem[] = [
    {
        id: 'dashboard',
        icon: <SmileOutlined />,
        labelKey: 'dashboard'
    },
    {
        id: 'account',
        icon: <UserOutlined />,
        labelKey: 'account'
    },
    {
        id: 'finance',
        icon: <DollarOutlined />,
        labelKey: 'finance'
    },
    {
        id: 'statistics',
        icon: <BarChartOutlined />,
        labelKey: 'statistics'
    },
    {
        id: 'documents',
        icon: <FileOutlined />,
        labelKey: 'documents'
    },
    {
        id: 'settings',
        icon: <SettingOutlined />,
        labelKey: 'settings'
    }
];

function PTIT_CNTT3_IT104_Session35_Ex06() {
    const isCollapsed = useSelector((state: RootState) => state.menu.isCollapsed);
    const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    };

    const handleToggleLanguage = () => {
        dispatch(toggleLanguage());
    };

    const sidebarStyle: React.CSSProperties = {
        width: isCollapsed ? '60px' : '220px',
        height: '100vh',
        backgroundColor: '#1f2937',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)'
    };

    const menuItemStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        color: '#e5e7eb',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        fontSize: '14px',
        borderRadius: '4px',
        margin: '2px 8px'
    };

    const iconStyle: React.CSSProperties = {
        fontSize: '18px',
        minWidth: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const labelStyle: React.CSSProperties = {
        marginLeft: '12px',
        opacity: isCollapsed ? 0 : 1,
        transition: 'opacity 0.2s ease',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    };
    return (
        <div style={{ display: 'flex' }}>
            <div style={sidebarStyle}>
                <div style={{
                    padding: '16px',
                    borderBottom: '1px solid #374151',
                    marginBottom: '10px'
                }}>
                    <div
                        style={{
                            ...menuItemStyle,
                            backgroundColor: '#374151',
                            marginBottom: '8px'
                        }}
                        onClick={handleToggleLanguage}
                    >
                        <div style={iconStyle}>
                            <GlobalOutlined />
                        </div>
                        {!isCollapsed && (
                            <span style={labelStyle}>
                                {currentLanguage === 'en' ? 'VI' : 'EN'}
                            </span>
                        )}
                    </div>
                </div>

                <nav style={{ flex: 1 }}>
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            style={menuItemStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#374151';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <div style={iconStyle}>
                                {item.icon}
                            </div>
                            {!isCollapsed && (
                                <span style={labelStyle}>
                                    {t(item.labelKey)}
                                </span>
                            )}
                        </div>
                    ))}

                </nav>

                <div style={{
                    borderTop: '1px solid #374151',
                    paddingTop: '10px'
                }}>
                    <div
                        style={menuItemStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <div style={iconStyle}>
                            <LogoutOutlined />
                        </div>
                        {!isCollapsed && (
                            <span style={labelStyle}>
                                {t('logout')}
                            </span>
                        )}
                    </div>

                    <div
                        style={menuItemStyle}
                        onClick={handleToggleMenu}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#374151';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <div style={iconStyle}>
                            {isCollapsed ? <RightOutlined /> : <LeftOutlined />}
                        </div>
                        {!isCollapsed && (
                            <span style={labelStyle}>
                                {t('collapse')}
                            </span>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PTIT_CNTT3_IT104_Session35_Ex06;
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useDeviceSize from 'utils/useDeviceSize'

function Nav(props) {
    const { isMobile } = useDeviceSize()
    const navigate = useNavigate()

    const { setIsLogin, location } = props
    const [ activePage, setActivePage ] = useState('dashboard')

    // Cambia al link activo segun la pagina en al que estemos ubicados
    useEffect(() => {
        const page = location === '/control-panel/dashboard' ? 'dashboard'
                    : location === '/control-panel/create-event' ? 'createEvent'
                    : location === '/control-panel/account' && 'account'

        setActivePage(page)
    }, [location])
    
    return (
        <nav>
            <div>
                <button 
                    className={activePage === 'dashboard' ? 'active' : ''}
                    onClick={() => navigate('/control-panel/dashboard')}
                >
                    <i className="fa-solid fa-table-list" />
                    <span className={isMobile ? 'hide' : ''}>Dashboard</span>
                </button>
                <button 
                    className={activePage === 'account' ? 'active' : ''}
                    onClick={() => navigate('/control-panel/account')}
                >
                    <i className="fa-solid fa-user" />  
                    <span className={isMobile ? 'hide' : ''}>Account</span>
                </button>
                <button 
                    className={`create ${activePage === 'createEvent' ? 'active' : ''}`}
                    onClick={() => navigate('/control-panel/create-event')}
                >
                    <i className={`fa-solid fa-plus ${isMobile ? 'hide' : ''}`} />
                    <span>Crear {isMobile ? '' : 'Evento'}</span>
                </button>
            </div>
            <button onClick={() => { setIsLogin(false); navigate('/') }}>
                <i className="fa-solid fa-arrow-right-from-bracket" />
            </button>
        </nav>
    )
}

export default Nav

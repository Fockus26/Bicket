import React from 'react'
import Dashboard from './ControlPanel/Dashboard'
import CreateEvent from './ControlPanel/CreateEvent'
import Account from './ControlPanel/Account'
import Nav from './ControlPanel/Nav'
import Footer from 'components/General/Footer'
import Error404 from 'components/General/Error404'
import 'css/ControlPanel.css'
import { useLocation } from 'react-router-dom';

function ControlPanel(props) {
  const { setIsLogin } = props
  const location = useLocation().pathname
  
  return (
    <main id='ControlPanel'>
      <Nav setIsLogin={setIsLogin} location={location} />
      <>
        {
          location === '/control-panel/dashboard' ? <Dashboard /> :
          location === '/control-panel/create-event' ? <CreateEvent /> :
          location === '/control-panel/account' ? <Account /> :
          <Error404 />
        }
      </>
      <Footer />
    </main>
  );
}

export default ControlPanel

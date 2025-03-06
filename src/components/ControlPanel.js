import React from 'react'
import Dashboard from './ControlPanel/Dashboard'
import Account from './ControlPanel/Account'
import Billing from './ControlPanel/Billing'
import Footer from 'components/General/Footer'
import Error404 from 'components/General/Error404'
import 'css/ControlPanel.css'
import { useLocation } from 'react-router-dom';

function ControlPanel() {
  const location = useLocation().pathname

  return (
    <main id='ControlPanel'>
      <>
        {
          location === '/' ? <Dashboard /> :
          location === '/user' ? <Account /> :
          location === '/billing' ? <Billing /> 
          : <Error404 />
        }
      </>
      <Footer />
    </main>
  );
}

export default ControlPanel

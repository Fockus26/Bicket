import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Authentication from './Authentication';
import ControlPanel from './ControlPanel/ControlPanel';
import Error404 from './General/Error404';

function App() {
  const [ isLogin, setIsLogin ] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Ruta principal: muestra Home o ControlPanel dependiendo del estado de isLogin */}
        <Route path="/" element={ isLogin ? <ControlPanel /> : <Home /> } />

        {/* Ruta de autenticación: redirige a la página principal si el usuario ya está logueado */}
        <Route
          path="/authentication/*"
          element={ isLogin ? <Navigate to="/" /> : <Authentication setIsLogin={ setIsLogin } /> }
        />

        {/* Ruta para errores 404 */}
        <Route path="*" element={ <Error404 /> } />
      </Routes>
    </Router>
  );
}

export default App;

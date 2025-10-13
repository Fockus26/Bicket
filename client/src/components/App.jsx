import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Authentication from "./Authentication";
import ControlPanel from "./ControlPanel";
import Error404 from "./General/Error404";

import ScrollToTop from "utils/scrollToTop";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Ruta principal: muestra Home si no esta logueado */}
        <Route
          path="/"
          element={
            isLogin ? <Navigate to="/control-panel/dashboard" /> : <Home />
          }
        />

        {/* Ruta principal: muestra Home o ControlPanel dependiendo del estado de isLogin */}
        <Route
          path="/control-panel/*"
          element={
            isLogin ? (
              <ControlPanel setIsLogin={setIsLogin} />
            ) : (
              <Navigate to="/authentication/sign-in" />
            )
          }
        />

        {/* Ruta de autenticación: redirige al panel de usuario si está logueado */}
        <Route
          path="/authentication/*"
          element={
            isLogin ? (
              <Navigate to="/control-panel/dashboard" />
            ) : (
              <Authentication setIsLogin={setIsLogin} />
            )
          }
        />

        {/* Ruta para errores 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;

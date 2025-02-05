import React, { useState, useEffect } from 'react';
import logo from 'assets/image/logo/logo-dark.png';
import shortLogo from 'assets/image/logo/short-logo-dark.png';

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 979);
  const [actualSection, setActualSection] = useState("Hero");
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showAccountButtons, setShowAccountButtons] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  // Cambia su estilo dependiendo del ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
      setIsTablet(window.innerWidth < 979);
    };

    window.addEventListener('resize', handleResize);
  });

  // Impide que se haga scroll cuando el menú está abierto
  useEffect(() => { document.body.style.overflow = isShowMenu ? 'hidden' : 'auto' }, [isShowMenu]);

  // Detectar el scroll hacia arriba o hacia abajo para ocultar o mostrar el nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ocultar cuando baja
      currentScrollY > prevScrollY && currentScrollY > 100 ? setIsVisible(false)
      // Mostrar cuando sube
      : currentScrollY < prevScrollY && setIsVisible(true);

      setPrevScrollY(currentScrollY);

      // Mostrar u ocultar botones de cuenta dependiendo de la posición del scroll
      isMobile && setShowAccountButtons(currentScrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
  }, [prevScrollY, isMobile]);

  // Muestra la opción seleccionada
  const selectMenu = nameSection => {
    setActualSection(nameSection);
    isMobile && setIsShowMenu(!isShowMenu);
  };

  return (
    <nav 
      className={`${isMobile && isShowMenu ? 'showMenu' : ''}`}
      style={{
        position: isMobile && "fixed",
        transform: isMobile && !isVisible && "translateY(-100%)",
      }}>
      
      <ul className='links'>
        { isMobile && <li> <i className={`fa-solid fa-${ isShowMenu ? 'xmark' : 'bars'}`} onClick={() => setIsShowMenu(!isShowMenu)} /> </li> }

        { ((isMobile && isShowMenu) || !isMobile) &&
          <>
            <li>
              <a href="#Hero" className={`${isMobile && actualSection === "Hero" ? 'selected' : ''}`} onClick={() => selectMenu("Hero")}>
                { isMobile ? 'Home' : <img src={ isTablet ? shortLogo : logo } alt="Logo BICKET" /> }
              </a>
            </li>
            <li>
              <a href="#Features" className={`${isMobile && actualSection === "Features" ? 'selected' : ''}`} onClick={() => selectMenu("Features")}>Features</a>
            </li>
            <li>
              <a href="#Pricing" className={`${isMobile && actualSection === "Pricing" ? 'selected' : ''}`} onClick={() => selectMenu("Pricing")}>Pricing</a>
            </li>
            <li>
              <a href="#QA" className={`${isMobile && actualSection === "QA" ? 'selected' : ''}`} onClick={() => selectMenu("QA")}>QA</a>
            </li>
          </>
        }
      </ul>

      { ((isMobile && !isShowMenu) || !isMobile) && 
        <ul 
          className="sign"
          style={{ 
            opacity: !showAccountButtons && 0, 
            pointerEvents: !showAccountButtons && 'none',  
          }}>
          <li className="signUp">
            <a href='/authentication/sign-up' >Sign Up</a>
          </li>
          <li className="signIn">
            <a href='/authentication/sign-in' >Sign In</a>
          </li>
        </ul>
      }
    </nav>
  );
}

export default Nav;
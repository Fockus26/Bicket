import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const getDeviceSize = () => {
    const width = window.innerWidth;
    return {
      isMobile: width <= 767,
      isTablet: width >= 768 && width <= 979,
      isLaptop: width >= 980 && width <= 1279,
      isDesktop: width >= 1280,
    };
  };

  const [deviceSize, setDeviceSize] = useState(getDeviceSize());

  useEffect(() => {
    const handleResize = () => setDeviceSize(getDeviceSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceSize;
};

export default useDeviceSize;

import { useMemo } from 'react'

const colorPages = {
  ticketmaster: 'hsl(220, 98%, 70%)',
  superboletos: 'hsl(0, 0%, 70%)',
  funticket: 'hsl(324, 98%, 70%)'
}

const parseHSL = hsl => {
  const regex = /hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i;
  const match = hsl.match(regex);
  
  const hue = match[1];
  const saturation = match[2];
  const lightness = match[3];
  return { hue, saturation, lightness };
};

const LIGHTNESS_PERCENTAGES = [23, 35, 40, 45, 50, 60, 70, 80];

const useColorPage = (page, isMultipleColors) => {
  const baseColor = colorPages[page]  
  
  const styles = useMemo(() => {
    let parsed;
    try {
      parsed = parseHSL(baseColor);      
    } catch (error) {            
      console.error(error);
      return {};
    }

    const { hue, saturation } = parsed;

    // Generamos un objeto con las variables CSS dinámicas
    const colorVariables = LIGHTNESS_PERCENTAGES.reduce((acc, lightness) => {

      acc[`--page-color-${lightness}`] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      return acc;
    }, {});

    return colorVariables;
  }, [baseColor]);

  if (isMultipleColors) return styles;
  else return baseColor;
}

export default useColorPage;
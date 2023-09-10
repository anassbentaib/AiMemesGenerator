import { createContext, useContext, useState } from 'react';

const ColorModeContext = createContext();

export const useColorModeContext = () => {
  return useContext(ColorModeContext);
};

export const ColorModeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

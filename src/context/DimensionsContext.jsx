import {
  createContext, useState, useEffect, useCallback,
} from 'react';

export const DimensionsContext = createContext({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  isMobile: document.documentElement.clientWidth < 800,
});

function DimensionsContextProvider({ children }) {
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    isMobile: document.documentElement.clientWidth < 800,
  });

  const handleResize = useCallback(
    () => {
      setDimensions({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        isMobile: document.documentElement.clientWidth < 800,
      });
    },
    [setDimensions],
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <DimensionsContext.Provider value={dimensions}>
      {children}
    </DimensionsContext.Provider>
  );
}

export default DimensionsContextProvider;

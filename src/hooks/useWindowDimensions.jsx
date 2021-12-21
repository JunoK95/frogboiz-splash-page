import { useContext } from 'react';
import { DimensionsContext } from '../context/DimensionsContext';

const useWindowDimensions = () => {
  const context = useContext(DimensionsContext);

  return context;
};

export default useWindowDimensions;

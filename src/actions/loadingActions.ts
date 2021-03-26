import { loadingTypes } from './types';

const setLoading = () => {
  return {
    type: loadingTypes.SET_LOADING,
  };
};

const setNotLoading = () => {
  return {
    type: loadingTypes.SET_NOT_LOADING,
  };
};

const loadingActions = {
  setLoading,
  setNotLoading,
};

export default loadingActions;

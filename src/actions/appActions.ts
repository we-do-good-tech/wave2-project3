import { appTypes } from './types';

const setIsMobile = (payload?: boolean) => {
  const isMobile = payload;
  return {
    type: appTypes.SET_APP_STATE,
    payload: { isMobile },
  };
};

const setIsTablet = (payload?: boolean) => {
  const isTablet = payload;
  return {
    type: appTypes.SET_APP_STATE,
    payload: { isTablet },
  };
};

const appActions = {
  setIsMobile,
  setIsTablet,
};

export default appActions;

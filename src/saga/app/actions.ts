import { appTypes } from '../types';
import { AuthenticatedUser, LoginPayload } from './reducer';

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

const setUser = (payload: AuthenticatedUser) => {
  const user = payload;
  return {
    type: appTypes.SET_APP_STATE,
    payload: { user, isAuth: true, error: undefined, isLoading: false },
  };
};

const setError = (error: string) => {
  return {
    type: appTypes.SET_APP_STATE,
    payload: { error, isLoading: false },
  };
};

const loginUser = (payload: LoginPayload) => {
  return {
    type: appTypes.LOGIN_USER,
    payload: payload,
  };
};

const appActions = {
  setIsMobile,
  setIsTablet,
  setUser,
  setError,
  loginUser,
};

export default appActions;

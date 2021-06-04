import { appTypes } from '../types';
import { IReducerPayload } from '../interfaces';

export interface User {
  id: string;
  username: string;
  admin: boolean;
}

interface TokenConfiguration {
  refresh_token: string;
  token: string;
}

export interface AuthenticatedUser extends User, TokenConfiguration {
  expiresIn?: Date;
}

export interface LoginResponse {
  status: string;
  data: {
    payload: TokenConfiguration;
    user: User;
    expiresIn?: Date;
  };
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface IAppState {
  isLoading: boolean;
  error?: string;
  isMobile: boolean;
  isTablet: boolean;
  isAuth: boolean;
  user?: AuthenticatedUser;
}
export const initialState = {
  isLoading: false,
  error: undefined,
  isMobile: false,
  isTablet: false,
  isAuth: false,
  user: undefined,
};
const changeAppState = (state: IAppState = initialState, { type, payload }: IReducerPayload<IAppState>) => {
  switch (type) {
    case appTypes.SET_APP_STATE:
      return { ...state, ...payload };
    case appTypes.LOGOUT_USER:
      return { ...state, user: undefined, isAuth: false };
    case appTypes.LOGIN_USER:
      return { ...state, user: undefined, isAuth: false, isLoading: true };
    case appTypes.REFRESH_USER:
      return { ...state, user: undefined, isAuth: false, isLoading: true };
    default:
      return state;
  }
};

export default changeAppState;

import { appTypes } from '../actions/types';
import { IReducerPayload } from './types';

export interface IAppState {
  isMobile: boolean;
  isTablet: boolean;
}
export const initialState = {
  isMobile: false,
  isTablet: false,
};
const changeAppState = (state: IAppState = initialState, payload: IReducerPayload) => {
  switch (payload.type) {
    case appTypes.SET_APP_STATE:
      return { ...state, ...payload.payload };
    default:
      return state;
  }
};

export default changeAppState;

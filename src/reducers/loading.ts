import { loadingTypes } from '../actions/types';
import { IReducerPayload } from './types';

const changeLoadingState = (state = { loading: true }, payload: IReducerPayload) => {
  switch (payload.type) {
    case loadingTypes.SET_LOADING:
      return (state = { loading: true });
    case loadingTypes.SET_NOT_LOADING:
      return (state = { loading: false });
    default:
      return state;
  }
};

export default changeLoadingState;

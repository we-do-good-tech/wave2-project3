import { disabilityTypes } from '../actions/types';
import { IReducerPayload } from './types';

const changeDisabilityState = (state = {}, payload: IReducerPayload) => {
  switch (payload.type) {
    case disabilityTypes.CHANGE_DISABILITY_STATE:
      return (state = payload.payload);
    case disabilityTypes.RESET_DISABILITY_STATE:
      return (state = {});
    default:
      return state;
  }
};

export default changeDisabilityState;

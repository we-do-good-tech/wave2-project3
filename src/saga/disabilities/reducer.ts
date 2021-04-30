import { IReducerPayload } from '../interfaces';
import { disabilityTypes } from '../types';

export interface IDisabilityState {
  [key: number]: number;
  isReset?: boolean;
}

const changeDisabilityState = (state: IDisabilityState = {}, payload: IReducerPayload<IDisabilityState>) => {
  switch (payload.type) {
    case disabilityTypes.CHANGE_DISABILITY_STATE:
      delete state.isReset;
      //@ts-ignore
      return (state = payload.payload);
    case disabilityTypes.RESET_DISABILITY_STATE:
      return (state = { isReset: true });
    default:
      return state;
  }
};

export default changeDisabilityState;

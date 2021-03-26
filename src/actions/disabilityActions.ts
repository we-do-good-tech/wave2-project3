import { disabilityTypes } from './types';

const setDisability = (payload?: Record<number, number>) => {
  return {
    type: disabilityTypes.CHANGE_DISABILITY_STATE,
    payload: payload,
  };
};

const resetDisability = () => {
  return {
    type: disabilityTypes.RESET_DISABILITY_STATE,
  };
};

const disabilityActions = {
  setDisability,
  resetDisability,
};

export default disabilityActions;

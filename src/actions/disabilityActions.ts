import { IDisabilitiesCategory } from '../pages/SportsModify/consts';
import { disabilityTypes } from './types';

const setDisability = (payload?: IDisabilitiesCategory) => {
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

export default {
  setDisability,
  resetDisability,
};

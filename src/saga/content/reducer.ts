import { contentTypes } from '../types';
import { IReducerPayload } from '../interfaces';
import { ISuccessCategory } from '../../pages/Successes/consts';
import { ITipsCategory } from '../../pages/Tips/consts';

export interface IContentState {
  isLoading: boolean;
  error?: string;
  success?: ISuccessCategory[];
  tip?: ITipsCategory[];
}
export const initialState = {
  isLoading: false,
};

const changeContentState = (state: IContentState = initialState, { type, payload }: IReducerPayload<IContentState>) => {
  switch (type) {
    case contentTypes.SET_CONTENT_SUCCESS:
    case contentTypes.SET_CONTENT_FAILED:
      return { ...state, ...payload, isLoading: false };
    case contentTypes.CREATE_CONTENT:
    case contentTypes.DELETE_CONTENT:
    case contentTypes.UPDATE_CONTENT:
    case contentTypes.LOAD_CONTENT:
    case contentTypes.SET_ACTIVE:
      return { ...state, error: undefined, isLoading: true };
    default:
      return state;
  }
};

export default changeContentState;

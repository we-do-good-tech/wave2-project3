import { usersTypes } from '../types';
import { IReducerPayload } from '../interfaces';
import { User } from '../app/reducer';

export interface IUsersState {
  isLoading: boolean;
  error?: string;
  users?: User[];
}
export const initialState = {
  isLoading: false,
};

const changeUsersState = (state: IUsersState = initialState, { type, payload }: IReducerPayload<IUsersState>) => {
  switch (type) {
    case usersTypes.LOAD_USERS_SUCCESS:
    case usersTypes.LOAD_USERS_FAILED:
      return { ...state, ...payload, isLoading: false };
    case usersTypes.CREATE_USER:
    case usersTypes.DELETE_USER:
    case usersTypes.UPDATE_USER:
    case usersTypes.LOAD_USERS:
    case usersTypes.SET_ADMIN:
      return { ...state, error: undefined, isLoading: true };
    default:
      return state;
  }
};

export default changeUsersState;

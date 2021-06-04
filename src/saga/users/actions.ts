import { usersTypes } from '../types';
import { IUsersState } from './reducer';

const loadUsers = () => {
  return {
    type: usersTypes.LOAD_USERS,
  };
};

const updateUser = (name: string, id: string) => {
  return {
    type: usersTypes.UPDATE_USER,
    payload: { name, id },
  };
};

const setAdmin = (id: string, admin: boolean) => {
  return {
    type: usersTypes.SET_ADMIN,
    payload: { id, admin },
  };
};

const createUser = (username: string, password: string) => {
  return {
    type: usersTypes.CREATE_USER,
    payload: { username, password },
  };
};

const deleteUser = (id: string) => {
  return {
    type: usersTypes.DELETE_USER,
    payload: { id },
  };
};

const loadUsersFailed = (error: string) => {
  return {
    type: usersTypes.LOAD_USERS_FAILED,
    payload: { error },
  };
};

const loadUsersSuccess = (payload: Partial<IUsersState>) => {
  return {
    type: usersTypes.LOAD_USERS_SUCCESS,
    payload: payload,
  };
};

const usersActions = {
  loadUsers,
  createUser,
  updateUser,
  deleteUser,
  loadUsersFailed,
  loadUsersSuccess,
  setAdmin,
};

export default usersActions;

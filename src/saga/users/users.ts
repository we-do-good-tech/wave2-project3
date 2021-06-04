import { put, takeEvery } from 'redux-saga/effects';
import { api } from '../api/api';
import { apiEndpoints } from '../api/api-endpoints';
import { IReducerPayload } from '../interfaces';
import { usersTypes } from '../types';
import usersActions from './actions';

const { AUTH_URL } = apiEndpoints;
const { loadUsersSuccess, loadUsersFailed } = usersActions;

function* loadUsersFunction() {
  try {
    const { data: users } = yield api.get(`${AUTH_URL}`);
    yield put(loadUsersSuccess({ users }));
  } catch (e) {
    yield put(loadUsersFailed(e.message));
  }
}

function* registerFunction({ payload }: IReducerPayload<{ username: string; password: string }>) {
  try {
    yield api.post(`${AUTH_URL}register`, payload);
    yield loadUsersFunction();
  } catch (e) {
    yield put(loadUsersFailed(e.message));
  }
}

function* deleteFunction({ payload }: IReducerPayload<{ id: string }>) {
  try {
    yield api.delete(`${AUTH_URL}${payload?.id}`);
    yield loadUsersFunction();
  } catch (e) {
    yield put(loadUsersFailed(e.message));
  }
}

function* makeAdminFunction({ payload }: IReducerPayload<{ id: string; admin: boolean }>) {
  try {
    yield api.post(`${AUTH_URL}${payload?.id}/admin`, { admin: payload?.admin });
    yield loadUsersFunction();
  } catch (e) {
    yield put(loadUsersFailed(e.message));
  }
}

export function* usersSagas() {
  yield takeEvery(usersTypes.LOAD_USERS, loadUsersFunction);
  yield takeEvery(usersTypes.DELETE_USER, deleteFunction);
  yield takeEvery(usersTypes.SET_ADMIN, makeAdminFunction);
  yield takeEvery(usersTypes.CREATE_USER, registerFunction);
}

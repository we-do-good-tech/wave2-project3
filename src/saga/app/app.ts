import axios, { AxiosInstance } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { apiConfig } from '../api/api';
import { apiEndpoints } from '../api/api-endpoints';
import { IReducerPayload } from '../interfaces';
import { appTypes } from '../types';
import appActions from './actions';
import { LoginPayload, LoginResponse } from './reducer';

const { setUser, setError } = appActions;
const { LOGIN_URL, REFRESH_URL, LOGOUT_URL } = apiEndpoints;

export const api: AxiosInstance = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {
    'X-Frame-Options': 'SAMEORIGIN',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

/**
 * Login function.
 * Payload - username + password.
 * Response - refresh token (cookie), access token, user profile.
 */
function* loginFunction({ payload }: IReducerPayload<LoginPayload>) {
  try {
    const { data: res }: LoginResponse = yield api.post(LOGIN_URL, payload);
    yield put(setUser({ ...res.user, ...res.payload }));
    yield apiConfig({ Authorization: `Bearer ${res.payload.token}` });
  } catch (e) {
    yield put(setError(e.message));
  }
}

/**
 * Refresh token function.
 * Payload - none.
 * Response - access token, user profile.
 */
function* refreshTokenFunction() {
  try {
    const { data: res }: LoginResponse = yield api.post(REFRESH_URL);
    yield put(setUser({ ...res.user, ...res.payload }));
    yield apiConfig({ Authorization: `Bearer ${res.payload.token}` });
  } catch (e) {
    yield put(setError(e.message));
  }
}

// /**
// * Logout function.
// * Payload - none.
// * Response - delete refresh token.
// */
function* logoutFunction() {
  try {
    yield api.post(LOGOUT_URL);
    yield apiConfig({ Authorization: `null` });
  } catch (e) {
    yield put(setError(e.message));
  }
}

// function* register() {
//    try {
//       const res: LoginResponse =  yield api.post(LOGIN_URL, payload);
//       if(res.status === 'success'){
//          yield put(setUser(res.data));
//       }
//    } catch (e) {
//       yield put(setError(e.message));
//    }
// }

// function* logout() {

// }

// function refresh() {

// }

export function* appSagas() {
  yield takeEvery(appTypes.LOGIN_USER, loginFunction);
  yield takeEvery(appTypes.REFRESH_USER, refreshTokenFunction);
  yield takeEvery(appTypes.LOGOUT_USER, logoutFunction);
}

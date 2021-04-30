import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { apiEndpoints } from '../api/api-endpoints';
import { IReducerPayload } from '../interfaces';
import { appTypes } from '../types';
import appActions from './actions';
import { LoginPayload, LoginResponse } from './reducer';

const { setUser, setError } = appActions;
const { REGISTER_URL, LOGIN_URL, REFRESH_URL } = apiEndpoints;

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* loginFunction({ payload }: IReducerPayload<LoginPayload>) {
  try {
    const { data: res }: LoginResponse = yield axios.post(LOGIN_URL, payload);
    yield put(setUser({ ...res.user, ...res.payload }));
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
  //@ts-ignore
  yield takeEvery(appTypes.LOGIN_USER, loginFunction);
}

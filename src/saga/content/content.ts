import { all, put, takeEvery } from 'redux-saga/effects';
import { ContentDataType, ContentType } from '../../Admin/Content/consts';
import { api } from '../api/api';
import { apiEndpoints } from '../api/api-endpoints';
import { IReducerPayload } from '../interfaces';
import { contentTypes } from '../types';
import contentActions from './actions';

const { CONTENT_URL } = apiEndpoints;
const { setContentSuccess, setContentFailed } = contentActions;

function* loadContentFunction() {
  try {
    const [{ data: success }, { data: tip }] = yield all([
      yield api.get(`${CONTENT_URL}/success`),
      yield api.get(`${CONTENT_URL}/tip`),
    ]);
    yield put(setContentSuccess({ success, tip }));
  } catch (e) {
    yield put(setContentFailed(e.response.data.message));
  }
}

function* createContentFunction({ payload }: IReducerPayload<{ payload: ContentDataType; dataType: ContentType }>) {
  try {
    yield api.post(`${CONTENT_URL}/${payload?.dataType}`, payload?.payload);
    yield loadContentFunction();
  } catch (e) {
    yield put(setContentFailed(e.response.data.message));
  }
}

function* updateContentFunction({
  payload,
}: IReducerPayload<{ payload: ContentDataType; dataType: ContentType; id: string }>) {
  try {
    yield api.patch(`${CONTENT_URL}/${payload?.dataType}/${payload?.id}`, payload?.payload);
    yield loadContentFunction();
  } catch (e) {
    yield put(setContentFailed(e.response.data.message));
  }
}

function* setActiveFunction({ payload }: IReducerPayload<{ active: boolean; dataType: ContentType; id: string }>) {
  try {
    yield api.put(`${CONTENT_URL}/${payload?.dataType}/${payload?.id}/active`, { active: payload?.active });
    yield loadContentFunction();
  } catch (e) {
    yield put(setContentFailed(e.response.data.message));
  }
}

function* deleteContentFunction({ payload }: IReducerPayload<{ dataType: ContentType; id: string }>) {
  try {
    yield api.delete(`${CONTENT_URL}/${payload?.dataType}/${payload?.id}`);
    yield loadContentFunction();
  } catch (e) {
    yield put(setContentFailed(e.response.data.message));
  }
}

export function* contentSagas() {
  yield takeEvery(contentTypes.LOAD_CONTENT, loadContentFunction);
  yield takeEvery(contentTypes.CREATE_CONTENT, createContentFunction);
  yield takeEvery(contentTypes.UPDATE_CONTENT, updateContentFunction);
  yield takeEvery(contentTypes.SET_ACTIVE, setActiveFunction);
  yield takeEvery(contentTypes.DELETE_CONTENT, deleteContentFunction);
}

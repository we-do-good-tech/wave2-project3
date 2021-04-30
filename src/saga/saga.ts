import { all, call } from 'redux-saga/effects';
import appActions from './app/actions';
import { appSagas } from './app/app';
import disabilityActions from './disabilities/actions';
import loadingActions from './loading/actions';

const allActions = {
  disabilityActions,
  loadingActions,
  appActions,
};

export default allActions;

export function* sagas() {
  yield all([call(appSagas)]);
}

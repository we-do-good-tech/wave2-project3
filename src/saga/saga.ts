import { all, call } from 'redux-saga/effects';
import appActions from './app/actions';
import { appSagas } from './app/app';
import { contentSagas } from './content/content';
import disabilityActions from './disabilities/actions';
import loadingActions from './loading/actions';
import usersActions from './users/actions';
import contentActions from './content/actions';
import { usersSagas } from './users/users';

const allActions = {
  disabilityActions,
  loadingActions,
  appActions,
  usersActions,
  contentActions,
};

export default allActions;

export function* sagas() {
  yield all([call(appSagas), call(contentSagas), call(usersSagas)]);
}

import disabilityReducers from './disabilities';
import loadingReducers from './loading';
import appReducers from './app';
import { combineReducers } from 'redux';

export type ApplicationState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  disabilityState: disabilityReducers,
  loadingState: loadingReducers,
  appState: appReducers,
});

export default rootReducer;

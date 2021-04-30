import disabilityReducers from './disabilities/reducer';
import loadingReducers from './loading/reducer';
import appReducers from './app/reducer';
import { combineReducers } from 'redux';

export type ApplicationState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  disabilityState: disabilityReducers,
  loadingState: loadingReducers,
  appState: appReducers,
});

export default rootReducer;

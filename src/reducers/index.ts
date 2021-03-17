import disabilityReducers from './disabilities';
import loadingReducers from './loading';
import { combineReducers } from 'redux';

export type ApplicationState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  disabilityState: disabilityReducers,
  loadingState: loadingReducers,
});

export default rootReducer;

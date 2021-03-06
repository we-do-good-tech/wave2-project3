import disabilityReducers from './disabilities';
import { combineReducers } from 'redux';

export type ApplicationState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  disabilityState: disabilityReducers,
});

export default rootReducer;

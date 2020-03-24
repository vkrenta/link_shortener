import { combineReducers } from 'redux';
import currentUser from './auth.reducer';
import isButtonDisabled from './button.reducer';
import error from './error.reducer';
import inProcess from './inProcess.reducer';

const rootReducer = combineReducers({
  currentUser,
  isButtonDisabled,
  error,
  inProcess,
});

export default rootReducer;

import { combineReducers } from 'redux';
import currentUser from './auth.reducer';
import isButtonDisabled from './button.reducer';
import error from './error.reducer';
import inProcess from './inProcess.reducer';
import token from './token.reducer';
import currentLink from './currentLink.reducer';
import loadedLinks from './loadLinks.reducer';
import userInfo from './userInfo.reducer';

const rootReducer = combineReducers({
  currentUser,
  isButtonDisabled,
  error,
  inProcess,
  token,
  currentLink,
  loadedLinks,
  userInfo,
});

export default rootReducer;

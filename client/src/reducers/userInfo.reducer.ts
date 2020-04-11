import { UserInfo, Action } from '../types';
import { SET_USER_INFO, CLEAR_USER_INFO } from '../actions';

const userInfo = (state: UserInfo = null, action: Action): UserInfo => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload.userInfo;
    case CLEAR_USER_INFO:
      return null;
    default:
      return state;
  }
};

export default userInfo;

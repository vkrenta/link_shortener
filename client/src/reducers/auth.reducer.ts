import { SET_USER, REMOVE_USER } from '../actions';
import { Action } from '../types';

const currentUser = (
  state: { userId: string | null; userName: string | null } = {
    userId: null,
    userName: null,
  },
  action: Action
): { userId: string | null; userName: string | null } => {
  switch (action.type) {
    case SET_USER:
      return {
        userId: action.payload.userId,
        userName: action.payload.userName,
      };
    case REMOVE_USER:
      return {
        userId: null,
        userName: null,
      };
    default:
      return state;
  }
};

export default currentUser;

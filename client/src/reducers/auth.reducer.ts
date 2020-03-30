// eslint-disable-next-line no-unused-vars
import { Action, SET_USER, REMOVE_USER } from '../actions';

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

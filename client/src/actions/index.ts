export interface Action {
  type: string;
  payload: any;
}

export const REGISTER_USER = 'REGISTER_USER';
export const SET_USER = 'SET_USER';

export const registerUser = (user: string, password: string): Action => {
  return {
    type: REGISTER_USER,
    payload: { user, password },
  };
};

export const setUser = (user: string): Action => {
  return {
    type: SET_USER,
    payload: { user: user, authenticated: true },
  };
};

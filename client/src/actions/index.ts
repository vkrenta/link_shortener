export interface Action {
  type: string;
  payload?: any;
}

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = ({
  email,
  userName,
  password,
}: {
  email: string;
  userName: string;
  password: string;
}): Action => {
  return {
    type: REGISTER_USER,
    payload: { email, userName, password },
  };
};

export const loginUser = (
  userNameOrEmail: string,
  password: string
): Action => {
  return {
    type: LOGIN_USER,
    payload: { userNameOrEmail, password },
  };
};

export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const setUser = (userId: string, userName: string): Action => {
  return {
    type: SET_USER,
    payload: { userId, userName },
  };
};

export const removeUser = (): Action => ({ type: REMOVE_USER });

export const ENABLE_BUTTON = 'ENABLE_BUTTON';
export const DISABLE_BUTTON = 'DISABLE_BUTTON';

export const enableButton = (): Action => {
  return {
    type: ENABLE_BUTTON,
    payload: { disabled: false },
  };
};

export const disableButton = (): Action => {
  return {
    type: DISABLE_BUTTON,
    payload: { disabled: true },
  };
};

export const INTERNAL_ERROR = 'INTERNAL_ERROR';
export const CUSTOM_ERROR = 'CUSTOM_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const internalError = (message: string): Action => {
  return {
    type: INTERNAL_ERROR,
    payload: { message },
  };
};

export const customError = (code: number, message: string): Action => {
  return {
    type: CUSTOM_ERROR,
    payload: { code, message },
  };
};

export const clearError = (): Action => {
  return {
    type: CLEAR_ERROR,
  };
};

export const INIT_PRELOADER = 'INIT_PRELOADER';
export const END_PRELOADER = 'END_PRELOADER';

export const initPreloader = (): Action => ({ type: INIT_PRELOADER });

export const endPreloader = (): Action => ({ type: END_PRELOADER });

export const SEND_ALERT = 'SEND_ALERT';
export const sendAlert = (message: string): Action => ({
  type: SEND_ALERT,
  payload: {
    message,
  },
});

export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const setToken = (token: string): Action => ({
  type: SET_TOKEN,
  payload: { token },
});
export const removeToken = (): Action => ({ type: REMOVE_TOKEN });

export const AUTHENTICATE = 'AUTHENTICATE';

export const authenticate = (token: string): Action => ({
  type: AUTHENTICATE,
  payload: { token },
});

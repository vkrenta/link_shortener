export interface Action {
  type: string;
  payload?: any;
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

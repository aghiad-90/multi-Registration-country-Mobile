export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_REQUEST_SUCCESS = 'SIGN_UP_REQUEST_SUCCESS';
export const SIGN_UP_REQUEST_ERROR = 'SIGN_UP_REQUEST_ERROR';
export const CLEAR_SIGN_UP_REQUEST = 'CLEAR_SIGN_UP_REQUEST';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_REQUEST_SUCCESS = 'SIGN_IN_REQUEST_SUCCESS';
export const SIGN_IN_REQUEST_ERROR = 'SIGN_IN_REQUEST_ERROR';
export const CLEAR_SIGN_IN_REQUEST = 'CLEAR_SIGN_IN_REQUEST';


export const signupRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const signupRequestSuccess = (payload: any) => ({
  type: SIGN_UP_REQUEST_SUCCESS,
  payload,
});

export const signupRequestError = (payload: any) => ({
  type: SIGN_UP_REQUEST_ERROR,
  payload,
});

export const clearSignupRequest = () => ({
  type: CLEAR_SIGN_UP_REQUEST
});


export const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
});

export const signInRequestSuccess = (payload: any) => ({
  type: SIGN_IN_REQUEST_SUCCESS,
  payload,
});

export const signInRequestError = (payload: any) => ({
  type: SIGN_IN_REQUEST_ERROR,
  payload,
});

export const clearSignInRequest = () => ({
  type: CLEAR_SIGN_IN_REQUEST
});

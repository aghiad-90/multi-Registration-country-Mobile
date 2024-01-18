import * as Actions from './actions';

export const initialState = {
  loading: false,
  response: null,
  error: null,
  userData: {
    loading: false,
    error: null,
    response: null,
  },
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SIGN_UP_REQUEST:
      return {...state, loading: true};
    case Actions.SIGN_UP_REQUEST_SUCCESS:
      return {...state, loading: false, response: action.payload};
    case Actions.SIGN_UP_REQUEST_ERROR:
      return {...state, loading: false, error: action.payload};
    case Actions.CLEAR_SIGN_UP_REQUEST:
      return initialState;
    case Actions.SIGN_IN_REQUEST:
      return {...state, userData: {...state.userData, loading: true}};
    case Actions.SIGN_IN_REQUEST_SUCCESS:
      return {
        ...state,
        userData: {...state.userData, loading: false, response: action.payload},
      };
    case Actions.SIGN_IN_REQUEST_ERROR:
      return {
        ...state,
        userData: {...state.userData, loading: false, error: action.payload},
      };
    case Actions.CLEAR_SIGN_IN_REQUEST:
      return initialState
    default:
      return state;
  }
}

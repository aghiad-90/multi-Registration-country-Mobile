import * as Actions from './actions';

export const initialState = {
    lang: '',
    country: '',
    theme: '',
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SELECT_LANGUAGE:
      return {...state, ...action.payload};
    case Actions.SELECT_COUNTRY:
      return {...state, ...action.payload};
    case Actions.SET_USER_PREFERENCES:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

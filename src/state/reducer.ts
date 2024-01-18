import userPref from '../features/prepare/store';
import authReducer from '../features/prelogin/store/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  userPref,
  authReducer,
});

export const appReducer = (state: any, action: any): any => {
  return rootReducer(state, action);
};

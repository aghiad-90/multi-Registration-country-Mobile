import * as Actions from '../actions';
import prepareReducer from '../store';

export const initialState = {
  lang: '',
  country: '',
  theme: '',
};

describe('Prepare reducer tests', () => {
  it('should return the initial state when state is undefined', () => {
    const action = {
      payload: {},
    };
    expect(prepareReducer(undefined, action)).toEqual(initialState);
  });

  it('should return new state when setCountry action is called', () => {
    expect(prepareReducer(initialState, Actions.setLanguage())).toEqual({
      ...initialState,
      country: '',
    });
  });
  it('should return new state when setCountry action is called', () => {
    expect(prepareReducer(initialState, Actions.setCountry())).toEqual({
      ...initialState,
      lang: '',
    });
  });

  it('should return new state when setUser Preferences action is called', () => {
    expect(prepareReducer(initialState, Actions.setUserPreferences())).toEqual({
      ...initialState,
      theme : ''
    });
  });
});

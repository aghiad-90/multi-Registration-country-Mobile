import * as Actions from '../store/actions';
import preloginReducer from '../store/reducer';

export const initialState = {
  loading: false,
  response: null,
  error: null,
  userData : {
    loading : false,
    error : null,
    response : null
  }
};

describe('preloginReducer reducer tests', () => {
  it('should return the initial state when state is undefined', () => {
    const action = {
      payload: {},
    };
    expect(preloginReducer(undefined, action)).toEqual(initialState);
  });

  it('should return new state when sign up action is called', () => {
    expect(preloginReducer(initialState, Actions.signupRequest())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should return response when action is successed', () => {
    const payload = {};
    expect(
      preloginReducer(initialState, Actions.signupRequestSuccess(payload)),
    ).toEqual({
      ...initialState,
      loading: false,
      response: payload,
    });
  });

  it('should return error when sign up action is failed', () => {
    const error = {};
    expect(
      preloginReducer(initialState, Actions.signupRequestError(error)),
    ).toEqual({
      ...initialState,
      loading: false,
      error: error,
    });
  });

  it('should return initial state when sign up clear action is called', () => {
    expect(preloginReducer(initialState, Actions.clearSignupRequest())).toEqual(
      {
        ...initialState,
      },
    );
  });
});

export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const SET_USER_PREFERENCES= 'SET_USER_PREFERENCES';

export const setCountry = (payload: any) => ({
  type: SELECT_COUNTRY,
  payload,
});

export const setLanguage = (payload: any) => ({
  type: SELECT_LANGUAGE,
  payload,
});

export const setUserPreferences = (payload: any) => ({
  type: SET_USER_PREFERENCES,
  payload,
});


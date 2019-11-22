import {combineReducers} from 'redux';
import languages from '../languages';

const HOME_STATE = {
  test: '123',
};

const LANGUAGE_STATE = {
  languages,
  defaultLanguage: 'en',
};

const homeReducer = (state = HOME_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const languageReducer = (state = LANGUAGE_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  home: homeReducer,
  language: languageReducer,
});

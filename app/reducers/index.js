import {combineReducers} from 'redux';
import homeReducer from './home';
import languageReducer from './language';
import themeReducer from './theme';

export default combineReducers({
  home: homeReducer,
  language: languageReducer,
  theme: themeReducer,
});

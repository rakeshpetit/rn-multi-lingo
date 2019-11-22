import {createSelector} from 'reselect';

export const currentLanguage = createSelector(
  state => state.language,
  ({languages, defaultLanguage}) => languages[defaultLanguage],
);

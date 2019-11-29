import {createSelector} from 'reselect';

export const currentLanguage = createSelector(
  state => state.language,
  ({languages, defaultLanguage}) => languages[defaultLanguage],
);

export const currentTheme = createSelector(
  state => state.theme,
  ({defaultTheme}) => defaultTheme,
);
// Code below is an example to show why we use reselect

// export const currentLanguage = state => {
//   const {languages, defaultLanguage} = state.language;
//   console.log('currentLanguage selector', defaultLanguage);
//   return languages[defaultLanguage];
// };

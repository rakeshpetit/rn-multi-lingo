import produce from 'immer';
import languages from '../languages';

// const LANGUAGE_STATE = {
//   languages,
//   defaultLanguage: 'en',
// };

//Normal redux reducer
// export default (state = LANGUAGE_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

//Immer reducer with default state outside the produce function
// export default produce((draft, action) => {
//   switch (action.type) {
//     case 'CHANGE_LANGUAGE':
//       if (draft.defaultLanguage === 'ar') {
//         draft.defaultLanguage = 'en';
//       } else if (draft.defaultLanguage === 'en') {
//         draft.defaultLanguage = 'fr';
//       } else if (draft.defaultLanguage === 'fr') {
//         draft.defaultLanguage = 'ar';
//       }
//       return;
//     default:
//       return LANGUAGE_STATE;
//   }
// });

export default produce(
  (draft, action) => {
    switch (action.type) {
      case 'CHANGE_LANGUAGE':
        if (draft.defaultLanguage === 'ar') {
          draft.defaultLanguage = 'en';
        } else if (draft.defaultLanguage === 'en') {
          draft.defaultLanguage = 'fr';
        } else if (draft.defaultLanguage === 'fr') {
          draft.defaultLanguage = 'ar';
        }
        return;
    }
  },
  {
    languages,
    defaultLanguage: 'en',
  },
);

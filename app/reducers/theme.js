import produce from 'immer';

export default produce(
  (draft, action) => {
    switch (action.type) {
      case 'CHANGE_THEME':
        if (draft.defaultTheme === 'light') {
          draft.defaultTheme = 'dark';
        } else if (draft.defaultTheme === 'dark') {
          draft.defaultTheme = 'light';
        }
        return;
    }
  },
  {
    defaultTheme: 'light',
  },
);

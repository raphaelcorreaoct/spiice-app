import {ThemeActionTypes} from './themeActionTypes';
import {defaultTheme} from './../../theme/defaultTheme';

const INITIAL_STATE = {
  theme: defaultTheme,
};

export const themeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};

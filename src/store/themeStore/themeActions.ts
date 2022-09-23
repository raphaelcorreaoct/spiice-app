import {useDispatch} from 'react-redux';
import {ThemeActionTypes, ThemeState} from './themeActionTypes';
import {defaultTheme, purpleTheme, darkTheme} from '../../theme/defaultTheme';

export const useTheme = () => {
  const dispatch = useDispatch();

  const themeList = {
    light: defaultTheme,
    dark: darkTheme,
    purple: purpleTheme,
  };

  const changeTheme = (theme: ThemeState['theme']) => {
    const payload = themeList[theme];
    dispatch({type: ThemeActionTypes.CHANGE_THEME, payload});
  };

  return {changeTheme};
};

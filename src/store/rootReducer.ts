import {combineReducers} from 'redux';
import {loginReducer} from './loginStore/loginReducers';
import {themeReducer} from './themeStore/themeReducer';

const rootReducer = combineReducers({
  loginReducer,
  themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

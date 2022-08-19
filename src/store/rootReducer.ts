import {combineReducers} from 'redux';
import {loginReducer} from './loginStore/loginReducers';

const rootReducer = combineReducers({
  loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

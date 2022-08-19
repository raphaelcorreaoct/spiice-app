import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {LOGIN_FAILURE, LOGIN_SUCCESS} from './loginActionType';

export type AuthUser = FirebaseAuthTypes.User | null;
export type AuthContextProps = {
  user: AuthUser;
  isLoggedIn: boolean;
  loading: boolean;
};

const INITIAL_STATE = {
  user: null,
  isLoggedIn: false,
  loading: true,
};

export const loginReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
      };
    }
    default:
      return state;
  }
};

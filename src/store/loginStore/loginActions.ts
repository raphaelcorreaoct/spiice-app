import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {LOGIN_FAILURE, LOGIN_SUCCESS} from './loginActionType';

export const useAuth = () => {
  const dispatch = useDispatch();

  const verifyLoggedIn = async () => {
    try {
      auth().onAuthStateChanged(User => {
        dispatch({type: LOGIN_SUCCESS, payload: User});
      });
    } catch (err) {
      dispatch({type: LOGIN_FAILURE, payload: null});
    }
  };

  return {verifyLoggedIn};
};

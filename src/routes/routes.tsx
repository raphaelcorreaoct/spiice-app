import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './appStack';
import {LoginStack} from './loginStack';

import {useSelector} from 'react-redux';
import {useAuth} from './../store/loginStore/loginActions';
import {RootState} from '../store/rootReducer';

export default function Routes() {
  const [initialized, setInitialized] = React.useState(false);
  const authState = useSelector((state: RootState) => state.loginReducer);
  const Auth = useAuth();

  useEffect(() => {
    if (!initialized) {
      Auth.verifyLoggedIn();
      setInitialized(true);
    }
  }, []);
  return (
    <NavigationContainer>
      {authState.user ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
}

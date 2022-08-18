import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './appStack';
import {LoginStack} from './loginStack';

export default function Routes() {
  const [isLogged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLogged(true);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      {!isLogged && <LoginStack />}
      {isLogged && <AppStack />}
    </NavigationContainer>
  );
}

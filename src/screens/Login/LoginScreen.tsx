import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Box, Input} from '../../components';
import {PrimaryButton} from './../../components/Buttons/PrimaryButton';
import Txt from './../../components/Text/Text';

export default function LoginScreen() {
  const [values, setValues] = useState({
    email: '',
    passw: '',
  });

  const handleLogin = () => {
    console.log('foi...');
    auth()
      .createUserWithEmailAndPassword(values.email, values.passw)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          auth().signInWithEmailAndPassword(values.email, values.passw);
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.log(error);
      });
  };

  const changeValues = (field, value) => {
    setValues(prev => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      px="xxxs"
      bg="color-background">
      <Txt mb="md" fontSize="display" color="color-primary">
        $
      </Txt>

      <Box mb="xxxs" width="100%">
        <Txt mb="nano">E-mail: </Txt>
        <Input
          value={values.email}
          autoCapitalize={'none'}
          onChangeText={text => changeValues('email', text)}
        />
      </Box>

      <Box width="100%">
        <Txt mb="nano">Senha: </Txt>
        <Input
          secureTextEntry
          autoCapitalize={'none'}
          value={values.passw}
          onChangeText={text => changeValues('passw', text)}
        />
      </Box>

      <PrimaryButton title="Login" onPress={handleLogin} mt="sm" width="100%" />
    </Box>
  );
}

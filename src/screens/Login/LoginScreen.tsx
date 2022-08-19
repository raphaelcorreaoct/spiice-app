import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import React from 'react';

export default function LoginScreen() {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Login"
        onPress={() => {
          auth()
            .createUserWithEmailAndPassword(
              'jane.doe@example.com',
              'SuperSecretPassword!',
            )
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                auth().signInWithEmailAndPassword(
                  'jane.doe@example.com',
                  'SuperSecretPassword!',
                );
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        }}
      />
    </View>
  );
}

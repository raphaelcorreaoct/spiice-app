import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
      <Button
        title="Go to Profile"
        onPress={() => {
          firestore()
            .collection('Users')
            .add({
              name: 'Ada Lovelace',
              age: 30,
            })
            .then(() => {
              console.log('User added!');
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />
    </View>
  );
}

import React from 'react';
import {Box, Txt} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {SecondaryButton} from '../../components/Buttons/PrimaryButton';
import auth from '@react-native-firebase/auth';

export default function Account() {
  const authState = useSelector((state: RootState) => state.loginReducer);

  return (
    <Box flex={1} px="xxxs" justifyContent="center" alignItems="center">
      <Txt fontSize="md">
        Olá, {authState.user.displayName || authState.user.email}
      </Txt>
      <SecondaryButton
        title="Sair"
        width={'100%'}
        mt="xs"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
    </Box>
  );
}

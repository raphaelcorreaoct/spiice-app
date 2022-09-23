import React from 'react';
import {Box, Txt} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {
  OutlineButton,
  SecondaryButton,
} from '../../components/Buttons/PrimaryButton';
import auth from '@react-native-firebase/auth';
import {useTheme} from './../../store/themeStore/themeActions';

export default function Account() {
  const authState = useSelector((state: RootState) => state.loginReducer);
  const theme = useTheme();

  return (
    <Box
      flex={1}
      px="xxxs"
      justifyContent="center"
      alignItems="center"
      bg="color-background">
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

      <Box mt="xs" width="100%">
        <Txt>Mudar o tema</Txt>
        <OutlineButton
          title="Nu Bank"
          onPress={() => {
            theme.changeTheme('purple');
          }}
        />
        <OutlineButton
          title="Excel"
          mt="xs"
          onPress={() => {
            theme.changeTheme('light');
          }}
        />
        <OutlineButton
          title="Drakula"
          mt="xs"
          onPress={() => {
            theme.changeTheme('dark');
          }}
        />
      </Box>
    </Box>
  );
}

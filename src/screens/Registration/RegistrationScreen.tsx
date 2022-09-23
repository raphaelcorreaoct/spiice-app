import React, {useState} from 'react';
import {Box, Input, PrimaryButton, Txt} from '../../components';
import {addTransaction} from '../../services';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import Toast from 'react-native-toast-message';

const replaceToCurrency = (value: string) => {
  let val = value.replace(/[a-z A-Z]/g, '');

  return val;
};

export default function RegistrationScreen() {
  const auth = useSelector((store: RootState) => store.loginReducer);

  const [values, setValues] = useState({
    value: '0,00',
    description: '',
    category: '',
    data: new Date(),
  });

  const onValueChange = (field: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = () => {
    try {
      if (!auth.user.uid) {
        throw 'Você não está logado!';
      }

      if (values.value.length === 0 || values.value === '') {
        throw 'O valor digitado está inválido!';
      }

      addTransaction({
        userId: auth.user.uid,
        category: values.category,
        date: values.data,
        description: values.description,
        value: values.value,
      });

      setValues({
        value: '0,00',
        description: '',
        category: '',
        data: new Date(),
      });

      Toast.show({
        type: 'success',
        text1: 'Valor cadastrado com sucesso!',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro!',
        text2: error.message,
      });
    }
  };

  return (
    <Box flex={1} bg="color-background" justifyContent="center">
      <Box px="xxxs">
        <Box justifyContent="center" alignItems="center" mb="lg">
          <Txt>Valor</Txt>
          <Input
            minWidth={'100%'}
            value={values.value}
            fontSize={'xxxl'}
            fontWeights="bold"
            borderWidth={0}
            textAlign="center"
            color="on-color-background"
            onChangeText={text => {
              onValueChange('value', replaceToCurrency(text));
            }}
          />
        </Box>
        <Box mb="xxxs">
          <Txt mb="nano">Descrição</Txt>
          <Input
            value={values.description}
            onChangeText={text => {
              onValueChange('description', text);
            }}
          />
        </Box>
        <Box mb="xxxs">
          <Txt mb="nano">Categoria</Txt>
          <Input
            value={values.category}
            onChangeText={text => {
              onValueChange('category', text);
            }}
          />
        </Box>

        <Box flexDirection="row" mt="xxs">
          <PrimaryButton
            title="Cadastrar"
            flex={1}
            mr="nano"
            onPress={onSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
}

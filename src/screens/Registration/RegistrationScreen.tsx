import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {addTransaction} from '../../services';
import {Box, Input, PrimaryButton, Txt} from '../../components';
import {SecondaryButton} from '../../components/Buttons/PrimaryButton';

export default function RegistrationScreen() {
  const [values, setValues] = useState({
    value: 60000,
    description: '',
    category: '',
    isPositive: true,
  });

  const onValueChange = (field: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box flex={1} bg="background-color" justifyContent="center">
      <Box px="xxxs">
        <Box justifyContent="center" alignItems="center" mb="lg">
          <Txt>Valor</Txt>
          <Input value={values.value} />
        </Box>
        <Box mb="xxxs">
          <Txt mb="nano">Descrição</Txt>
          <Input
            placeholder="Lanche na sexta"
            value={values.description}
            onChangeText={text => {
              onValueChange('description', text);
            }}
          />
        </Box>
        <Box mb="xxxs">
          <Txt mb="nano">Categoria</Txt>
          <Input
            placeholder="Lanche na sexta"
            value={values.category}
            onChangeText={text => {
              onValueChange('category', text);
            }}
          />
        </Box>

        <Box flexDirection="row" mt="xxs">
          <PrimaryButton title="Positivo" flex={1} mr="nano" />
          <SecondaryButton title="Negativo" flex={1} />
        </Box>
      </Box>
    </Box>
  );
}

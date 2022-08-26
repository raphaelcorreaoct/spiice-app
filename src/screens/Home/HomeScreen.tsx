import React from 'react';
import {Box, Txt} from '../../components';
import DataTabView from './components/dataTabView';

export default function HomeScreen() {
  return (
    <Box flex={1}>
      <Box height={135} bg="color-primary" px="xxxs" justifyContent="center">
        <Txt fontSize="sm" color="on-color-primary">
          Saldo atual
        </Txt>
        <Txt fontSize="xl" fontWeights="bold" color="on-color-primary">
          R$ 1100,00
        </Txt>
      </Box>
      <DataTabView />
    </Box>
  );
}

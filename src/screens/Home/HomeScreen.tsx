import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {Box, Txt} from '../../components';
import {getAllData} from '../../services';
import {RootState} from '../../store/rootReducer';
import DataTabView from './components/dataTabView';

export default function HomeScreen() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [allTransactions, setAllTransactions] = useState([]);
  const auth = useSelector((store: RootState) => store.loginReducer);

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

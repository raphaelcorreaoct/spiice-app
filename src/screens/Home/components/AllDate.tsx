import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Box, CardList} from './../../../components';
import {useTheme} from 'styled-components';
import {RootState} from '../../../store/rootReducer';
import {useSelector} from 'react-redux';
import {getAllData} from '../../../services';
import {TransactionType} from '../../../types';

export default function AllDate() {
  const theme = useTheme();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [allTransactions, setAllTransactions] = useState([]);
  const auth = useSelector((store: RootState) => store.loginReducer);

  const loadData = async () => {
    await getAllData(auth.user.uid, documentSnapshot => {
      const all = documentSnapshot.data();

      setAllTransactions(all?.transactions);
      setLoading(false);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  if (isLoading)
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" />
      </Box>
    );

  const renderItem = ({item}: {item: TransactionType}) => {
    return (
      <CardList
        category={item.category}
        description={item.description}
        value={item.value}
      />
    );
  };

  return (
    <FlatList
      data={allTransactions}
      renderItem={renderItem}
      style={{
        paddingHorizontal: theme.space.nano,
        backgroundColor: theme.colors['color-background'],
      }}
    />
  );
}

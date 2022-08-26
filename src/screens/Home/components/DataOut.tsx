import {FlatList} from 'react-native';
import React from 'react';
import {CardList} from '../../../components';
import {useTheme} from 'styled-components';

export default function DataOut() {
  const theme = useTheme();
  const DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderItem = () => {
    return <CardList />;
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      style={{
        paddingHorizontal: theme.space.nano,
        backgroundColor: theme.colors['color-background'],
      }}
    />
  );
}

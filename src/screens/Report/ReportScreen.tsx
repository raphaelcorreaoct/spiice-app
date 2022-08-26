import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {Box, Txt} from '../../components';

import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

export default function ReportScreen() {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <Box flex={1} bg="color-background">
      <Box flexDirection="row" justifyContent="space-around">
        <Box justifyContent="center" alignItems="center">
          <Txt color="on-color-background" fontSize="xs">
            Entrada
          </Txt>
          <Txt color="color-success" fontSize="md">
            R$ 1000,00
          </Txt>
        </Box>
        <Box justifyContent="center" alignItems="center">
          <Txt color="on-color-background" fontSize="xs">
            Saída
          </Txt>
          <Txt color="color-danger" fontSize="md">
            R$ 2000,00
          </Txt>
        </Box>
      </Box>
      <Box flex={1}>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'0'}
          center={[0, 0]}
          chartConfig={chartConfig}
          absolute
        />
      </Box>
    </Box>
  );
}

import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useTheme} from 'styled-components';
import AllDate from './AllDate';
import DataIn from './DataIn';
import DataOut from './DataOut';

const renderScene = SceneMap({
  all: AllDate,
  dataIn: DataIn,
  dataOut: DataOut,
});

export default function DataTabView() {
  const layout = useWindowDimensions();
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'all', title: 'Tudo'},
    {key: 'dataIn', title: 'Entradas'},
    {key: 'dataOut', title: 'Saídas'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: theme.colors['on-color-primary']}}
      style={{backgroundColor: theme.colors['color-primary']}}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}

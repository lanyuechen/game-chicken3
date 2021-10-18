
import * as React from 'react';

import { usePageEvent } from 'remax/macro';
import { View, Text, Navigator } from 'remax/one';

const GAMES = [
  {
    id: 'air-war',
    name: '飞机大战',
  },
];

export default () => {
  usePageEvent('onShow', () => {
    console.log('page onShow');
  });

  return (
    <View>
      {GAMES.map(d => (
        <Navigator key={d.id} url={`/pages/player/index?id=${d.id}`}>{d.name}</Navigator>
      ))}
    </View>
  );
};


import * as React from 'react';

import { usePageEvent } from 'remax/macro';
import { View, Navigator } from 'remax/one';

import GAMES from '@/games';

console.log('====', GAMES)

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

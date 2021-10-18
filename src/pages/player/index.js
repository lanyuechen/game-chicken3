import React, { useMemo } from 'react';
import { useQuery } from 'remax';
import { View } from 'remax/one';

import Huarongdao from '@/games/huarongdao';
import AirWar from '@/games/air-war';

export default () => {
  const { id } = useQuery();

  const Game = useMemo(() => {
    return {
      huarongdao: Huarongdao,
      'air-war': AirWar,
    }[id];
  }, [id]);

  return (
    <View>
      <Game />
    </View>
  )
}
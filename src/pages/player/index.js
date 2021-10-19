import React from 'react';
import { useQuery } from 'remax';
import { View } from 'remax/one';
import { useGame } from '@/games';

export default () => {
  const { id } = useQuery();

  const Game = useGame(id);

  return (
    <View>
      <Game />
    </View>
  )
}
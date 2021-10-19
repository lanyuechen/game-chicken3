import React, { useState, useEffect } from 'react';
import { useQuery } from 'remax';
import { View } from 'remax/one';
import { getSystemInfo } from 'remax/wechat';
import { useGame } from '@/games';

export default () => {
  const { id } = useQuery();

  const Game = useGame(id);

  const [systemInfo, setSystemInfo] = useState();

  useEffect(async () => {
    const res = await getSystemInfo();
    setSystemInfo(res);
  }, []);

  if (!systemInfo) {
    return null;
  }

  return (
    <View>
      <Game systemInfo={systemInfo} />
    </View>
  )
}
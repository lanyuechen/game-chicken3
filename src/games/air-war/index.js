import React, { useCallback } from 'react';
import { Stage, Graphics } from '@inlet/react-pixi';

const AirWar = () => {

  const draw = useCallback((g) => {
    g.lineStyle(2);
    g.drawRect(50, 50, 100, 100);
  });

  return (
    <Stage
      options={{
        antialias: true,
        backgroundAlpha: 0,
      }}
    >
      <Graphics draw={draw} />
    </Stage>
  )
}

AirWar.gameName = '飞机大战';

export default AirWar;
import React, { useMemo } from 'react';
import { Stage } from '@inlet/react-pixi';
import Rectangle from './rectangle';

const ROW = 6;
const COL = 4;

const AirWar = () => {

  const grids = useMemo(() => {
    return new Array(ROW).fill(new Array(COL).fill(0));
  }, []);

  return (
    <Stage
      options={{
        antialias: true,
        backgroundAlpha: 0,
      }}
    >
      {grids.map((row, i) => row.map((_, j) => (
        <Rectangle
          key={i * row.length + j}
          row={i}
          col={j}
          width={50}
          color={0x000000}
        />
      )))}
    </Stage>
  )
}

AirWar.gameName = '飞机大战';

export default AirWar;
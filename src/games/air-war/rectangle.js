import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';

export default (props) => {
  const { row, col, width, color } = props;

  const drawRectangle = useCallback((g, active = false) => {
    g.clear();
    g.lineStyle(1);
    g.beginFill(color, active ? 0.1 : 0.01);
    g.drawRect(col * width, row * width, width, width);
    g.endFill();
  }, [row, col, width, color]);

  const draw = useCallback((g) => {
    drawRectangle(g);
    g.on('pointerover', () => {
      drawRectangle(g, true);
    });
    g.on('pointerout', () => {
      drawRectangle(g);
    });
  }, [drawRectangle]);

  return <Graphics draw={draw} interactive />;
}
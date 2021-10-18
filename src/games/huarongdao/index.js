import React, { useRef, useEffect } from 'react';
import { View } from 'remax/one';

import Puzzle from '@/utils/puzzle';

const ROLES = [
  {name: '空白', role: 0},
  {name: '士兵', role: 1, background: 'lightgray'},
  {name: '士兵', role: 2, background: 'lightgray'},
  {name: '士兵', role: 3, background: 'lightgray'},
  {name: '士兵', role: 4, background: 'lightgray'},
  {name: '关羽', role: 5, background: 'lightblue'},
  {name: '赵云', role: 6, background: 'lightcyan'},
  {name: '马超', role: 7, background: 'lightgreen'},
  {name: '张飞', role: 8, background: 'lightpink'},
  {name: '黄忠', role: 9, background: 'lightsalmon'},
  {name: '曹操', role: 10, background: 'lightyellow'},
];

const STAGES = [
  {
    name: '横刀立马',
    minStep: 81,
    board: [
      [8, 10, 10, 9],
      [8, 10, 10, 9],
      [6, 5,  5,  7],
      [6, 2,  3,  7],
      [1, 0,  0,  4],
    ],
  },
]

export default () => {
  const ref = useRef();

  useEffect(() => {
    const sizeH = Math.floor((window.innerWidth - 20) / 4);
    const sizeV = Math.floor((window.innerHeight - 20) / 5);
    const size = Math.min(sizeH, sizeV);

    const puzzle = new Puzzle({
      board: STAGES[0].board,
      row: 5,
      col: 4,
      size,
    });

    const dom = puzzle.render((role) => {
      const div = document.createElement('div');
      div.innerHTML = ROLES[role].name;
      div.style.border = `2px solid #fff`;
      div.style.boxSizing = 'border-box';
      div.style.height = '100%';
      div.style.background = ROLES[role].background;
      return div;
    });

    dom.style.margin = 'auto';
    ref.current.appendChild(dom);
  }, []);

  return (
    <View ref={ref} />
  );
}

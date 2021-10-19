import { useMemo } from 'react';

const GAMES = require.context('@/games', true, /^\.\/[^/]*\/index\.js$/);

export const useGame = (id) => {
  return useMemo(() => GAMES(`./${id}/index.js`).default, [id]);
}

export default GAMES.keys().map(key => ({
  id: key.match(/^\.\/([^/]*)\/index\.js$/)[1],
  name: GAMES(key).default.gameName,
}));


import { useAppEvent } from 'remax/macro';

import '@/utils/weapp-adapter';

export default function App(props) {
  useAppEvent('onShow', () => {
    console.log('app onShow');
  });

  useAppEvent('onShareAppMessage', () => {
    console.log('onShareAppMessage');
  });

  return props.children;
}
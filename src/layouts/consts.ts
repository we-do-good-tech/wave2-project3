import { LimpiHome } from '../pages/LimpiHome';
import { testComponent, testComponent2 } from '../components/TestComponent';
import { RouterType } from './types';

export const limpiRouters: RouterType[] = [
  {
    path: '/',
    name: 'home',
    Component: LimpiHome,
  },
];

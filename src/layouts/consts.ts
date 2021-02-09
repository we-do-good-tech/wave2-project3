import { LimpiHome } from '../pages/LimpiHome';
import { RouterType } from './types';

export const limpiRouters: RouterType[] = [
  {
    path: '/',
    name: 'home',
    Component: LimpiHome,
  },
];

import { Admin } from '../Admin';
import { LimpiHome } from '../pages/LimpiHome';
import { RouterType } from './types';

export const limpiRouters: RouterType[] = [
  {
    path: '/home',
    name: 'home',
    Component: LimpiHome,
  },
  {
    path: '/admin',
    name: 'login',
    Component: Admin,
  },
];

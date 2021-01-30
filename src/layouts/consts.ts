import { LimpiHome } from '../components/LimpiHome';
import { testComponent, testComponent2 } from '../components/TestComponent';
import { RouterType } from './types';

export const limpiRouters: RouterType[] = [
  {
    path: '/',
    name: 'home',
    Component: LimpiHome,
  },
  {
    path: '/test',
    name: 'test',
    Component: testComponent,
  },
  {
    path: '/test2',
    name: 'test2',
    Component: testComponent2,
  },
];

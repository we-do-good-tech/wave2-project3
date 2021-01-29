import { testComponent, testComponent2 } from '../components/TestComponent';
import { RouterType } from './types';


export const limpiRouters: RouterType[] = [
  {
    path: '/test',
    name: 'hom',
    Component: testComponent
  },
  {
    path: '/test2',
    name: 'home',
    Component: testComponent2
  }
]
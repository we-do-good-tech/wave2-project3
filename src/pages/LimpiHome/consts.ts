import { testComponent, testComponent2 } from '../../components/TestComponent';
import { About } from '../About';
import { LimpiHomePage } from './types';

export const limpiHomeComponents: LimpiHomePage[] = [
  {
    name: 'About',
    component: About,
  },
  {
    name: 'home2',
    component: testComponent2,
  },
  {
    name: 'home3',
    component: testComponent,
  },
];

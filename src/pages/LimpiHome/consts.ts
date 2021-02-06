import { testComponent, testComponent2 } from '../../components/TestComponent';
import { About } from '../About';
import { Association } from '../Association';
import { LimpiHomePage } from './types';

export const limpiHomeComponents: LimpiHomePage[] = [
  {
    name: 'About',
    component: About,
    title: 'דף הבית',
  },
  {
    name: 'Association',
    component: Association,
    title: 'על ההתאחדות',
  },
  {
    name: 'home3',
    component: testComponent,
    title: 'קצת השראה',
  },
];

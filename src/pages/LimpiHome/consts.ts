import { About } from '../About';
import { Association } from '../Association';
import { SportsModify } from '../SportsModify';
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
    component: SportsModify,
    title: 'קצת השראה',
  },
];

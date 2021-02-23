import { About } from '../About';
import { Association } from '../Association';
import { SportsModify } from '../SportsModify';
import { Tips } from '../Tips';
import { LimpiHomePage } from './types';
import { Footer } from '../Footer';

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
  {
    name: 'Tips',
    component: Tips,
    title: 'טיפים',
  },
  {
    name: 'Footer',
    component: Footer,
    title: 'אודות',
  },
];

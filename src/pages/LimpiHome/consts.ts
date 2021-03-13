import { About } from '../About';
import { Association } from '../Association';
import { Successes } from '../Successes';
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
    name: 'Successes',
    component: Successes,
    title: 'הצלחות',
  },
  {
    name: 'SportsModify',
    component: SportsModify,
    title: 'התאמת ענף ספורט',
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
    hideInBar: true,
  },
];

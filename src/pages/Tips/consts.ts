import Caroline from '../../images/tips/Carolin.png';

export interface ITipsCategory {
  id: number;
  name: string;
  lastName: string;
  tip: string;
  age: number;
  title: string;
  image?: String;
  gender: string;
  color: string;
}

export const tips: ITipsCategory[] = [
  {
    id: 1,
    name: 'ליאת',
    lastName: 'שלום',
    tip: 'במהלך פעילות כיתתית אתם על כיסא גלגלים? אז שגם החברים שלכם לכיתה ישחקו בישיבה.',
    age: 17,
    title: 'שחקנית רוגבי',
    gender: 'בת',
    image: '{Caroline}',
    color: '#f18267',
  },
  {
    id: 2,
    name: 'שם2',
    lastName: 'משפחה2',
    tip: '2טיפ',
    age: 22,
    title: 'תפקיד2',
    gender: 'בן',
    image: '{Caroline}',
    color: '#60cce8',
  },
  {
    id: 3,
    name: 'שם3',
    lastName: 'משפחה3',
    tip: 'טיפ3',
    age: 23,
    title: 'תפקיד3',
    gender: 'בת',
    image: '{Caroline}',
    color: '#7587ae',
  },
  {
    id: 4,
    name: 'שם4',
    lastName: 'משפחה4',
    tip: 'טיפ4',
    age: 24,
    title: 'תפקיד4',
    gender: 'בן',
    image: '{Caroline}',
    color: '#4fb27f',
  },
  {
    id: 5,
    name: 'שם5',
    lastName: 'משפחה5',
    tip: 'טיפ5',
    age: 25,
    title: 'תפקיד5',
    gender: 'בת',
    image: '{Caroline}',
    color: '#60cce8',
  },
  {
    id: 6,
    name: 'שם6',
    lastName: 'משפחה6',
    tip: 'טיפ6',
    age: 26,
    title: 'תפקיד6',
    gender: 'בן',
    image: '{Caroline}',
    color: '#f18267',
  },
];

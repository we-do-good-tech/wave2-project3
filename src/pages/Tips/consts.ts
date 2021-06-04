export interface ITipsCategory {
  id: string;
  name: string;
  lastName: string;
  tip: string;
  age: number;
  title: string;
  image?: String;
  gender: GenderType;
  className: TipClassNameType;
  active?: boolean;
}
export type GenderType = 'male' | 'female';
export type TipClassNameType = 'turqiz' | 'blue' | 'orange' | 'green';

export const tips: ITipsCategory[] = [
  {
    id: '1',
    name: 'ליאת',
    lastName: 'שלום',
    tip: 'במהלך פעילות כיתתית אתם על כיסא גלגלים? אז שגם החברים שלכם לכיתה ישחקו בישיבה.',
    age: 17,
    title: 'שחקנית רוגבי',
    gender: 'female',
    image: '{Caroline}',
    className: 'orange',
  },
  {
    id: '2',
    name: 'שם2',
    lastName: 'משפחה2',
    tip: '2טיפ',
    age: 22,
    title: 'תפקיד2',
    gender: 'male',
    image: '{Caroline}',
    className: 'turqiz',
  },
  {
    id: '3',
    name: 'שם3',
    lastName: 'משפחה3',
    tip: 'טיפ3',
    age: 23,
    title: 'תפקיד3',
    gender: 'female',
    image: '{Caroline}',
    className: 'blue',
  },
  {
    id: '4',
    name: 'שם4',
    lastName: 'משפחה4',
    tip: 'טיפ4',
    age: 24,
    title: 'תפקיד4',
    gender: 'male',
    image: '{Caroline}',
    className: 'green',
  },
  {
    id: '5',
    name: 'שם5',
    lastName: 'משפחה5',
    tip: 'טיפ5',
    age: 25,
    title: 'תפקיד5',
    gender: 'female',
    image: '{Caroline}',
    className: 'turqiz',
  },
  {
    id: '6',
    name: 'שם6',
    lastName: 'משפחה6',
    tip: 'טיפ6',
    age: 26,
    title: 'תפקיד6',
    gender: 'male',
    image: '{Caroline}',
    className: 'orange',
  },
];

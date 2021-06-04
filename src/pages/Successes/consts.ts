export interface ISuccessCategory {
  id: string;
  name: string;
  title: string;
  image?: string;
  color: 'green' | 'orange' | 'turqiz';
  description: string;
  active?: boolean;
}

export const ISuccessConsts: ISuccessCategory[] = [
  {
    id: '1',
    name: 'שם ומשפחה',
    title: 'סיפור הצלחה',
    image: '',
    color: 'green',
    description: '',
  },
  {
    id: '2',
    name: 'שם ומשפחה 2',
    title: 'סיפור הצלחה 2',
    image: '',
    color: 'orange',
    description: '',
  },
  {
    id: '3',
    name: 'שם ומשפחה 3',
    title: 'סיפור הצלחה 3',
    image: '',
    color: 'turqiz',
    description: '',
  },
  {
    id: '4',
    name: 'שם ומשפחה 4',
    title: 'סיפור הצלחה 4',
    image: '',
    color: 'green',
    description: '',
  },
  {
    id: '3',
    name: 'שם ומשפחה 3',
    title: 'סיפור הצלחה 3',
    image: '',
    color: 'turqiz',
    description: '',
  },
  {
    id: '4',
    name: 'שם ומשפחה 4',
    title: 'סיפור הצלחה 4',
    image: '',
    color: 'orange',
    description: '',
  },
];

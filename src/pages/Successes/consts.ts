export interface ISuccessCategory {
  id: number;
  name: string;
  detail: string;
  image?: String;
  color: 'green' | 'orange' | 'turqiz';
  question: string;
  answer: string;
}

export const ISuccessConsts: ISuccessCategory[] = [
  {
    id: 1,
    name: 'שם ומשפחה',
    detail: 'סיפור הצלחה',
    image: '',
    color: 'green',
    question: 'שאלה 1',
    answer: 'תשובה 1',
  },
  {
    id: 2,
    name: 'שם ומשפחה 2',
    detail: 'סיפור הצלחה 2',
    image: '',
    color: 'orange',
    question: 'שאלה 2',
    answer: 'תשובה 2',
  },
  {
    id: 3,
    name: 'שם ומשפחה 3',
    detail: 'סיפור הצלחה 3',
    image: '',
    color: 'turqiz',
    question: 'שאלה 3',
    answer: 'תשובה 3',
  },
  {
    id: 4,
    name: 'שם ומשפחה 4',
    detail: 'סיפור הצלחה 4',
    image: '',
    color: 'green',
    question: 'שאלה 4',
    answer: 'תשובה 4',
  },
  {
    id: 3,
    name: 'שם ומשפחה 3',
    detail: 'סיפור הצלחה 3',
    image: '',
    color: 'turqiz',
    question: 'שאלה 3',
    answer: 'תשובה 3',
  },
  {
    id: 4,
    name: 'שם ומשפחה 4',
    detail: 'סיפור הצלחה 4',
    image: '',
    color: 'orange',
    question: 'שאלה 4',
    answer: 'תשובה 4',
  },
];

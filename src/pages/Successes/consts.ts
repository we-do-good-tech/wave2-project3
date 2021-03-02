export interface ISuccessesCategory {
  id: number;
  name: string;
  detail: string;
  image?: String;
  color: string;
  question: string;
  answer: string;
}

export const ISuccesses: ISuccessesCategory[] = [
  {
    id: 1,
    name: 'שם ומשפחה',
    detail: 'סיפור הצלחה',
    image: '',
    color: '#4fb27f',
    question: 'שאלה 1',
    answer: 'תשובה 1',
  },
  {
    id: 2,
    name: 'שם ומשפחה 2',
    detail: 'סיפור הצלחה 2',
    image: '',
    color: '#f18267',
    question: 'שאלה 2',
    answer: 'תשובה 2',
  },
  {
    id: 3,
    name: 'שם ומשפחה 3',
    detail: 'סיפור הצלחה 3',
    image: '',
    color: '#60cce8',
    question: 'שאלה 3',
    answer: 'תשובה 3',
  },
  {
    id: 4,
    name: 'שם ומשפחה 4',
    detail: 'סיפור הצלחה 4',
    image: '',
    color: '#4fb27f',
    question: 'שאלה 4',
    answer: 'תשובה 4',
  },
];

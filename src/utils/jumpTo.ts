import { limpiHomeComponents } from '../pages/LimpiHome/consts';

const scroll = (elementId: string) => {
  let ele = document.getElementById(elementId);
  ele?.scrollIntoView({ behavior: 'smooth' });
};

export const jumpTo = (idx: number) => {
  scroll(limpiHomeComponents[idx].specialScrollId ?? limpiHomeComponents[idx].name);
};

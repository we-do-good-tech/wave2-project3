import { limpiHomeComponents } from '../pages/LimpiHome/consts';

const scroll = (element: string) => {
  let ele = document.getElementById(element);
  window.scrollTo({ left: ele?.offsetLeft || 0, top: ele?.offsetTop || 0, behavior: 'smooth' });
};

export const jumpTo = (idx: number) => {
  scroll(limpiHomeComponents[idx].specialScrollId ?? limpiHomeComponents[idx].name);
};

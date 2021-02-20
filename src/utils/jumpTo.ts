import { limpiHomeComponents } from '../pages/LimpiHome/consts';

const scroll = (element: string) => {
  let ele = document.getElementById(element);
  window.scrollTo({ left: ele?.offsetLeft || 0, top: ele?.offsetTop || 0, behavior: 'smooth' });
};

export const jumpTo = (idx: number) => {
  if (idx === 0) {
    scroll('root');
  } else scroll(limpiHomeComponents[idx].name);
};

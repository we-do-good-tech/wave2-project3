export const lockScreen = () => {
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};

export const unlockScreen = () => {
  document.getElementsByTagName('body')[0].style.overflow = 'visible';
};

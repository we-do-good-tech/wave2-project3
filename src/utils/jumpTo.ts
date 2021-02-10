export const jumpTo = (idx: number) => {
  const jumpLocation = idx * 797;
  if (idx === 0) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else window.scrollTo({ top: jumpLocation, left: 0, behavior: 'smooth' });
};

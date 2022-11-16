export const shuffleArray = (array: any, size: number) => {
  const shuffled = array.slice(0);
  let i = array.length;
  const min = i - size < 0 ? 0 : i - size;
  let temp;
  let index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(min);
};

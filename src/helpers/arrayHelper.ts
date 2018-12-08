export const shuffleArray = (array: string[]): string[] => {
  let valueAtCurrentIndex: string;
  for (let i: number = array.length - 1; i > 0; i--) {
    valueAtCurrentIndex = array[i];
    const randomIndex: number = Math.floor(Math.random() * array.length);
    array[i] = array[randomIndex];
    array[randomIndex] = valueAtCurrentIndex;
  }

  return array;
};

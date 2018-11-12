const generateIcon = (): string => {
  const possibleIcons = ["candy", "death", "trap", ""];
  const rand: number = Math.floor(Math.random() * 4);
  return possibleIcons[rand];
};

const hardBoard: string[][] = [];
for (let i = 0; i < 10; i++) {
  const row: string[] = [];
  for (let j = 0; j < 10; j++) {
    const icon: string = i === 5 && j === 5 ? "user" : generateIcon();
    row.push(icon);
  }
  hardBoard.push(row);
}

export { hardBoard };

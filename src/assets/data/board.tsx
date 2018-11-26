export type IBoard = string[][];

export interface IUserPos {
  posx: number;
  posy: number;
}

const userPosition: IUserPos = { posx: 0, posy: 0 };

const emptyBoard = (
  rowNumber: number,
  columnNumber: number = rowNumber
): IBoard => {
  const board: IBoard = new Array();
  for (let i: number = 0; i < rowNumber; i++) {
    board[i] = new Array(columnNumber).fill("empty");
  }
  return board;
};

const generateFields = (board: IBoard) => (cellName: string) => {
  let numberOfCells: number;
  let isUser: boolean = false;
  switch (cellName) {
    case "trap":
    case "death":
      numberOfCells = Math.ceil((board[0].length * board.length) / 10);
      break;
    case "candy":
      numberOfCells = Math.ceil((board[0].length * board.length) / 5);
      break;
    case "user":
      isUser = true;
      numberOfCells = 1;
      break;
    default:
      numberOfCells = 0;
  }

  for (let i = 0; i < numberOfCells; i++) {
    let posx: number;
    let posy: number;
    posx = Math.floor(Math.random() * board.length);
    posy = Math.floor(Math.random() * board[0].length);

    while (board[posx][posy] !== "empty") {
      posx = Math.floor(Math.random() * board.length);
      posy = Math.floor(Math.random() * board[0].length);
    }
    if (isUser) {
      userPosition.posx = posx;
      userPosition.posy = posy;
    }
    board[posx][posy] = cellName;
  }
};

const populateBoard = (
  rowNumber: number,
  columnNumber: number = rowNumber
): IBoard => {
  const board: IBoard = emptyBoard(rowNumber, columnNumber);

  const poluteBoard = generateFields(board);

  poluteBoard("trap");
  poluteBoard("death");
  poluteBoard("candy");
  poluteBoard("user");

  return board;
};

export { emptyBoard, populateBoard, userPosition };

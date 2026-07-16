const EMPTY = "empty";
const SHIP = "ship";
const HIT = "hit";
const MISS = "miss";

const BOARD_SIZE = 10;

function createBoard() {
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const r = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      r.push(EMPTY);
    }
    board.push(r);
  }
  return board;
}

function renderBoard(board, containerId, showShips) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      const state = board[row][col];
      if (state === SHIP && showShips) {
        cell.classList.add("ship");
      } else if (state === HIT) {
        cell.classList.add("hit");
        cell.textContent = "X";
      } else if (state === MISS) {
        cell.classList.add("miss");
      }
      container.appendChild(cell);
    }
  }
}

const playerBoard = createBoard();
const computerBoard = createBoard();

renderBoard(playerBoard, "player-board", true);
renderBoard(computerBoard, "enemy-board", false);

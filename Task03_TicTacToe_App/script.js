const board = document.getElementById("board");
const status = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let cells = Array(9).fill("");
let gameActive = true;

function createBoard() {
  board.innerHTML = "";
  cells.forEach((_, i) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", cellClick);
    board.appendChild(cell);
  });
}

function cellClick(e) {
  const i = e.target.dataset.index;
  if (!gameActive || cells[i]) return;

  cells[i] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWin()) {
    status.textContent = `${currentPlayer} Wins!`;
    gameActive = false;
  } else if (!cells.includes("")) {
    status.textContent = "It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `${currentPlayer}'s Turn`;
  }
}

function checkWin() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return combos.some(([a,b,c]) =>
    cells[a] && cells[a] === cells[b] && cells[a] === cells[c]
  );
}

resetBtn.onclick = () => {
  cells.fill("");
  gameActive = true;
  currentPlayer = "X";
  status.textContent = "X's Turn";
  createBoard();
};

createBoard();
status.textContent = "X's Turn";

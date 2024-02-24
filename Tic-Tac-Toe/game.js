const boxes = document.getElementsByClassName("box");
const size = 3; //board of size*size
let currentPlayer = "x";
let totalMovesMade = 0;
let isGameOver = false;
const msg = document.getElementById("game-status");

//create an array of size*size with null values
let boardArr = Array(size)
  .fill()
  .map(() => Array(size).fill(null));

//add click event to start button
document.getElementById("start-btn").addEventListener("click", startGame);

function makeMove(boxId) {
  boxes[boxId - 1].textContent = currentPlayer; //fills box with either x or y
  totalMovesMade += 1;
}

function updateBoardArray(row, col) {
  boardArr[row - 1][col - 1] = currentPlayer; //udpate the board that move has been made on that row-col
}

function checkIsGameOver(row, col) {

  let horizontolCount = 0;
  let verticalCount = 0;
  let leftDiagonalCount = 0;
  let rightDiagonalCount = 0;

  //traverse horizontal, vertical and diagonals and count the moves of currentPlayer
  for (let i = 0; i < size; i++) {
    if (boardArr[row - 1][i] == currentPlayer) horizontolCount += 1;
    if (boardArr[i][col - 1] == currentPlayer) verticalCount += 1;

    //check left diganal only if row == col
    if (row == col) {
      if (boardArr[i][i] == currentPlayer) leftDiagonalCount += 1;
    }

    //rightDiagonalTraverse
    if (boardArr[i][size - 1 - i] == currentPlayer) rightDiagonalCount += 1;

    const condition1 = horizontolCount == size || verticalCount == size;
    const condition2 = leftDiagonalCount == size || rightDiagonalCount == size;

    if (condition1 || condition2) {
      msg.textContent = `Player ${currentPlayer} won!!`;
      isGameOver = true;
      return;
    }
  }
  if (totalMovesMade == size * size) msg.textContent = `Game draw!!`;
}

function startGame() {
  msg.textContent = "Game in progress...";
  document.getElementById("start-btn").disabled = true;
  for (let box of boxes) {
    box.addEventListener("click", (e) => {
      if (isGameOver) {
        alert("Game over!! To reset you can reload the page");
        return;
      }

      const id = e.target.id; //id of box clicked
      const row = parseInt(e.target.dataset.row); //row on which player clicked
      const col = parseInt(e.target.dataset.col); //col on which player clicked

      //check if move is already made at that row and col then return
      if (boardArr[row - 1][col - 1] != null) return;

      makeMove(id, row, col);
      updateBoardArray(row, col);

      if (totalMovesMade >= size * 2 - 1)
        checkIsGameOver(row, col);

      //swap player
      currentPlayer = currentPlayer == "x" ? "y" : "x";
    });
  }
}

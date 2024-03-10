let currentPlayer = "X";
let lastMove = null;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let gameMode = "twoPlayers";

document.querySelectorAll('input[name="gameMode"]').forEach((input) => {
  input.addEventListener("change", () => {
    gameMode = document.querySelector('input[name="gameMode"]:checked').value;
    resetBoard();
  });
});

function makeMove(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    lastMove = { row, col };
    document.getElementById("cell" + row + col).classList.add("player" + currentPlayer);
    
    if (checkWin()) {
      setTimeout(() => {
        alert(currentPlayer + " wygrywa!");
        resetBoard();
      }, 200);
    } else if (checkDraw()) {
      setTimeout(() => {
        alert("Remis!");
        resetBoard();
      }, 200);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (gameMode === "withComputer" && currentPlayer === "O") {
        setTimeout(makeComputerMove, 200);
      }
    }
  } else {
    alert("To pole jest już zajęte!");
  }
}

function makeComputerMove() {
  let emptyCells = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        emptyCells.push({ row, col });
      }
    }
  }
  if (emptyCells.length > 0) {
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let randomCell = emptyCells[randomIndex];
    makeMove(randomCell.row, randomCell.col);
  }
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return true;
    }
    if (board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return true;
    }
  }
  if (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return true;
  }
  if (board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        return false;
      }
    }
  }
  return true;
}

function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentPlayer = "X";
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.remove("playerX", "playerO");
  });
  lastMove = null;
}

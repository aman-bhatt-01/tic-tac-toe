const squares = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset");

let currentPlayer = "X";
let gameEnded = false;

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].textContent &&
      squares[a].textContent === squares[b].textContent &&
      squares[a].textContent === squares[c].textContent
    ) {
      return true;
    }
  }
  return false;
}

function handleSquareClick() {
  if (gameEnded || this.textContent) {
    return;
  }
  this.textContent = currentPlayer;
  if (checkWinner()) {
    gameEnded = true;
    alert(`${currentPlayer} wins!`);
  } else if ([...squares].every(square => square.textContent)) {
    gameEnded = true;
    alert("It's a tie!");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function resetGame() {
  currentPlayer = "X";
  gameEnded = false;
  squares.forEach(square => (square.textContent = ""));
}

squares.forEach(square => square.addEventListener("click", handleSquareClick));
resetButton.addEventListener("click", resetGame);

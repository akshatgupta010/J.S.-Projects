const boxes = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset-btn");
const newGameButton = document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // true for O's turn, false for X's turn
let count = 0; // to keep track of the number of moves made

const winPatterns = [
  [0, 1, 2], // Row 1
  [0, 3, 6], // Column 1
  [0, 4, 8], // Diagonal 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [2, 4, 6], // Diagonal 2
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"; //Set box text to O if it's O's turn
      turnO = false;
    } else {
      box.innerText = "X"; //Set box text to X if it's X's turn
      turnO = true;
    }
    box.disabled = true; // to prevent further clicks on the same box
    count++;

    let isWinner = checkWinner();
    if (!isWinner && count === 9) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! ${winner} wins!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return true;
      }
    }
  }
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

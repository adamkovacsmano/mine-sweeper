import Field from "./MineField.js";

console.log("hello");

let gameField = document.getElementById("field");

let array = new Array(4);
console.log(array);

const createField = (cols, rows, mine) => {
  let tombike2 = new Array(cols);
  for (let i = 0; i < tombike2.length; i++) {
    tombike2[i] = new Array(rows);
  }

  let bombCounter = mine;

  for (let i = 0; i < cols; i++) {
    for (let k = 0; k < rows; k++) {
      tombike2[i][k] = new Field();
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let k = 0; k < rows; k++) {
      if (tombike2[i][k].isLocked === false && bombCounter > 0) {
        if (Math.random() < 0.1) {
          tombike2[i][k].state = "x";
          tombike2[i][k].isLocked = true;
          bombCounter--;
        }
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let k = 0; k < rows; k++) {
      if (tombike2[i][k].isLocked === false) {
        let clue = 0;
        if (k < rows - 1 && tombike2[i][k + 1].isLocked === true) {
          clue++;
          tombike2[i][k].state = `${clue}`;
          clue = 0;
        }
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let k = 0; k < rows; k++) {
      gameField.innerHTML += ` ${tombike2[i][k].state} `;
    }
    gameField.innerHTML += `<br>`;
  }
};

createField(5, 10, 12);

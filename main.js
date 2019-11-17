import Field from "./MineField.js";

console.log("hello");

let gameField = document.getElementById("field");

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

  let clue = 0;
  for (let i = 0; i < cols; i++) {
    for (let k = 0; k < rows; k++) {
      if (tombike2[i][k].isLocked === false) {
        if (k < rows - 1 && tombike2[i][k + 1].isLocked === true) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
        if (
          i - 1 >= 0 &&
          i < cols - 1 &&
          tombike2[i - 1][k].isLocked === true
        ) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
        if (
          i - 1 >= 0 &&
          k < rows - 1 &&
          tombike2[i - 1][k + 1].isLocked === true
        ) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
        if (
          i - 1 >= 0 &&
          k - 1 >= 0 &&
          tombike2[i - 1][k - 1].isLocked === true
        ) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
        if (k - 1 >= 0 && tombike2[i][k - 1].isLocked === true) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
        if (
          k - 1 >= 0 &&
          i < cols - 1 &&
          tombike2[i + 1][k - 1].isLocked === true
        ) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
        if (i < cols - 1 && tombike2[i + 1][k].isLocked === true) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
        if (
          i < cols - 1 &&
          k < rows - 1 &&
          tombike2[i + 1][k + 1].isLocked === true
        ) {
          clue++;
          tombike2[i][k].state = `${clue}`;
        }
      }
      clue = 0;
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let k = 0; k < rows; k++) {
      gameField.innerHTML += ` ${tombike2[i][k].state} `;
    }
    gameField.innerHTML += `<br>`;
  }
};

createField(10, 10, 12);

// for (let i = -1; i < 1; i++) {
//   for (let j = -1 j < 1; j++) {
//     // try catch?

//   }

// }

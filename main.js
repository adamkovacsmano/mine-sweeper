import Field from "./MineField.js";

console.log("hello");

let gameField = document.getElementById("field");

const createField = (column, row, mine) => {
  let tombike2 = new Array(column);
  for (let i = 0; i < tombike2.length; i++) {
    tombike2[i] = new Array(row);
  }

  let bombCounter = mine;

  for (let i = 0; i < column; i++) {
    for (let k = 0; k < row; k++) {
      tombike2[i][k] = new Field();
    }
  }

  for (let i = 0; i < column; i++) {
    for (let k = 0; k < row; k++) {
      if (tombike2[i][k].isLocked === false && bombCounter > 0) {
        if (Math.random() < 0.1) {
          tombike2[i][k].state = "x";
          tombike2[i][k].isLocked = true;
          bombCounter--;
        }
      }
    }
  }

  // for (let i = 0; i < 4; i++) {
  //   for (let k = 0; k < 4; k++) {

  //   }
  // }

  for (let i = 0; i < column; i++) {
    for (let k = 0; k < row; k++) {
      gameField.innerHTML += ` ${tombike2[i][k].state} `;
    }
    gameField.innerHTML += `<br>`;
  }
};

createField(25, 25, 80);

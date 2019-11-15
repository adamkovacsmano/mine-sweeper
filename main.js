// console.log("hello");

// let array = [1, 2, 3, 4];

let gameField = document.getElementById("field");
gameField.innerHTML += "?";

// let field = 0;

// for (let i = 0; i < array.length; i++) {
//   for (let k = 0; k < array.length; k++) {
//     array[i][k] = field++;
//     console.log(field);
//   }
// }

// const createSquare = () => {
//   let newSquare = document.createElement("field");
//   newSquare.style.left = left + "px";
//   newSquare.style.top = top + "px";
//   newSquare.setAttribute("class", "squares");
//   document.getElementsByTagName("body")[0].appendChild(newSquare);
// };

// const createField = () => {
//   for (let y = 0; y < 15; y++) {
//     for (let x = 0; x < 15; x++) {
//       createSquare(x * 15, y * 15);
//     }
//   }
// };

// createSquare();

const createSquare = () => {
  let square = document.getElementById("");
};

const createField = () => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      createSquare();
    }
  }
};

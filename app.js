// task3
let counter = 0;

function increase() {
    counter++;
    document.getElementById('counter').innerText = counter;
}

function decrease() {
    counter--;
    document.getElementById('counter').innerText = counter;
}

function increaseBy5() {
    counter += 5;
    document.getElementById('counter').innerText = counter;
}

function decreaseBy5() {
    counter -= 5;
    document.getElementById('counter').innerText = counter;
}

function changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('counter').style.color = randomColor;
}

function increaseSize() {
    let currentSize = parseInt(window.getComputedStyle(document.getElementById('counter')).fontSize);
    document.getElementById('counter').style.fontSize = (currentSize + 2) + "px";
}

function decreaseSize() {
    let currentSize = parseInt(window.getComputedStyle(document.getElementById('counter')).fontSize);
    document.getElementById('counter').style.fontSize = (currentSize - 2) + "px";
}

// task4


  const chessboard = document.getElementById('chessboard');


  for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
          const square = document.createElement('div');
          square.classList.add('square');
          
         
          if ((row + col) % 2 === 0) {
              square.classList.add('white');
          } else {
              square.classList.add('black');
          }

         
          chessboard.appendChild(square);
      }
  }
//   task5




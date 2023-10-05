// set initial player to X
let currentPlayer = 'x';

const attachClick = () => {
  const allSquares = document.getElementById('play-surface');
  const squaresArray = Array.from(allSquares.children);

  squaresArray.forEach((square, i) => {
    const ele = document.getElementById(`square-${i}`);
    ele.addEventListener('click', (event) => {
      event.preventDefault();
      const x = document.createElement('img');
      x.className = 'x';
      x.src =
        'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg';

      const o = document.createElement('img');
      o.className = 'o';
      o.src =
        'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg';

      if (!ele.children.length) {
        if (currentPlayer == 'x') {
          ele.appendChild(x);
          currentPlayer = 'o';
        } else if (currentPlayer == 'o') {
          ele.appendChild(o);
          currentPlayer = 'x';
        }
      }

      win(i);
    });
  });
};

const win = (i) => {
  const allSquares = document.getElementById('play-surface');
  const squaresArray = Array.from(allSquares.children);
  const currentClickedSquare = document.getElementById(`square-${i}`);

  const matrix = [
    [
      squaresArray[0].lastChild,
      squaresArray[1].lastChild,
      squaresArray[2].lastChild,
    ],
    [
      squaresArray[3].lastChild,
      squaresArray[4].lastChild,
      squaresArray[5].lastChild,
    ],
    [
      squaresArray[6].lastChild,
      squaresArray[7].lastChild,
      squaresArray[8].lastChild,
    ],
  ];
  console.log(matrix);

  if (
    matrix[0][0] &&
    matrix[0][1] &&
    matrix[0][2] &&
    (matrix[0][0].lastChild.className === matrix[0][1].lastChild.className) ===
      matrix[0][2].lastChild.className
  ) {
    console.log('you won!')
  }
};

attachClick();

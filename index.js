const lifeArray = [
  [true, false, true],
  [false, true, false],
  [true, false, false],
];
const newLifeArray = [];

const loopArray = () => {
  let countNeighbor = 0;
  for (let x = 0; x < lifeArray.length; x++) {
    for (let y = 0; y < lifeArray.length; y++) {
      //1
      if (x > 0 && y > 0) if (lifeArray[x - 1][y - 1]) countNeighbor++;

      //2
      if (x > 0) if (lifeArray[x - 1][y]) countNeighbor++;

      //3
      if (x > 0 && y < lifeArray.length - 1)
        if (lifeArray[x - 1][y + 1]) countNeighbor++;

      //4
      if (y > 0) if (lifeArray[x][y - 1]) countNeighbor++;

      //5
      if (y < lifeArray.length - 1) if (lifeArray[x][y + 1]) countNeighbor++;

      //6
      if (x < lifeArray.length - 1 && y > 0)
        if (lifeArray[x + 1][y - 1]) countNeighbor++;

      //7
      if (x < lifeArray.length - 1) if (lifeArray[x + 1][y]) countNeighbor++;

      //8
      if (x < lifeArray.length - 1 && y < lifeArray.length - 1)
        if (lifeArray[x + 1][y + 1]) countNeighbor++;

      //reglas
      if (lifeArray[x][y] === false && countNeighbor > 3)
        lifeArray[x][y] = true;

      if (
        (lifeArray[x][y] === true && countNeighbor === 2) ||
        countNeighbor === 3
      )
        lifeArray[x][y] = true;

      if (lifeArray[x][y] === true && countNeighbor > 3)
        lifeArray[x][y] = false;

      if (lifeArray[x][y] === true && countNeighbor < 2)
        lifeArray[x][y] = false;

      console.log(lifeArray[x][y]);

      //newLifeArray.push(lifeArray);
    }
  }
  console.log(countNeighbor);
  newLifeArray.push(lifeArray);
};

console.log(loopArray());
console.log(newLifeArray);

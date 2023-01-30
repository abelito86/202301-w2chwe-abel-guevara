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
      if (x > 0 && y > 0) if (lifeArray[x - 1][y - 1]) countNeighbor++;

      if (x > 0) if (lifeArray[x - 1][y]) countNeighbor++;

      if (x > 0 && y < lifeArray.length - 1)
        if (lifeArray[x - 1][y + 1]) countNeighbor++;

      if (y > 0) if (lifeArray[x][y - 1]) countNeighbor++;

      if (y < lifeArray.length - 1) if (lifeArray[x][y + 1]) countNeighbor++;

      if (x < lifeArray.length - 1 && y > 0)
        if (lifeArray[x + 1][y - 1]) countNeighbor++;

      if (x < lifeArray.length - 1) if (lifeArray[x + 1][y]) countNeighbor++;

      if (x < lifeArray.length - 1 && y < lifeArray.length - 1)
        if (lifeArray[x + 1][y + 1]) countNeighbor++;

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
    }
  }
  console.log(countNeighbor);
  newLifeArray.push(lifeArray);
  return console.log(lifeArray);
};

console.log(loopArray());
console.log(newLifeArray);

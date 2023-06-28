function knightsMoves(start, end) {
  const boardSize = 7;
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  let q = [[start]];
  const seen = new Set();

  while (q.length > 0) {
    let path = q.shift();
    let curr = path[path.length - 1];

    if (curr[0] === end[0] && curr[1] === end[1]) {
      path.forEach((coords) => console.log(coords));
      return path;
    }

    for (let m of moves) {
      let nextX = curr[0] + m[0];
      let nextY = curr[1] + m[1];
      if (nextX < 0 || nextX > boardSize || nextY < 0 || nextY > boardSize) {
        continue;
      }

      if (!seen.has(`${nextX}, ${nextY}`)) {
        seen.add(`${nextX}, ${nextY}`);
        const newPath = [...path, [nextX, nextY]];
        q.push(newPath);
      }
    }
  }
}
console.log(knightsMoves([3, 3], [4, 3]));

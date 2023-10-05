export function getNeighbors(row, col, matrix) {
  let neighbors = [];

  // Check top
  if (row > 0 && matrix[row - 1][col] === 1) neighbors.push([row - 1, col]);
  // Check top right
  if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] === 1)
    neighbors.push([row - 1, col + 1]);
  // Check right
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1)
    neighbors.push([row, col + 1]);
  // Check bottom right
  if (
    row < matrix.length - 1 &&
    col < matrix[row].length - 1 &&
    matrix[row + 1][col + 1] === 1
  )
    neighbors.push([row + 1, col + 1]);
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1)
    neighbors.push([row + 1, col]);
  // Check bottom left
  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1)
    neighbors.push([row + 1, col - 1]);
  // Check left
  if (col > 0 && matrix[row][col - 1] === 1) neighbors.push([row, col - 1]);
  // Check top left
  if (col > 0 && row > 0 && matrix[row - 1][col - 1] === 1)
    neighbors.push([row - 1, col - 1]);

  // Return neighbors
  return neighbors;
}

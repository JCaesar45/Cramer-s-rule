function determinant(matrix) {
  const n = matrix.length;

  if (n === 1) return matrix[0][0];
  if (n === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;
  for (let col = 0; col < n; col++) {
    const subMatrix = matrix.slice(1).map(row =>
      row.filter((_, j) => j !== col)
    );
    det += ((col % 2 === 0 ? 1 : -1) * matrix[0][col] * determinant(subMatrix));
  }

  return det;
}

function cramersRule(coefficients, constants) {
  const n = coefficients.length;
  const detA = determinant(coefficients);

  if (detA === 0) return null;

  const solution = [];

  for (let i = 0; i < n; i++) {
    const modifiedMatrix = coefficients.map((row, r) =>
      row.map((val, c) => (c === i ? constants[r] : val))
    );
    solution.push(determinant(modifiedMatrix) / detA);
  }

  return solution;
}

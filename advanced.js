const MATRIX_SIZE = 4;

const matrixContainer = document.getElementById("matrix-input");
const constantsContainer = document.getElementById("constants-input");
const resultDisplay = document.getElementById("result");

function createInputs() {
  matrixContainer.innerHTML = "";
  constantsContainer.innerHTML = "";

  for (let i = 0; i < MATRIX_SIZE * MATRIX_SIZE; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.value = 0;
    matrixContainer.appendChild(input);
  }

  for (let i = 0; i < MATRIX_SIZE; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.value = 0;
    constantsContainer.appendChild(input);
  }
}

function determinant(matrix) {
  const n = matrix.length;

  if (n === 1) return matrix[0][0];

  if (n === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;
  for (let col = 0; col < n; col++) {
    const subMatrix = matrix
      .slice(1)
      .map((row) => row.filter((_, i) => i !== col));
    det += (col % 2 === 0 ? 1 : -1) * matrix[0][col] * determinant(subMatrix);
  }

  return det;
}

function cramersRule(coefficients, constants) {
  const detA = determinant(coefficients);
  if (detA === 0) return null;

  return coefficients.map((_, colIndex) => {
    const modified = coefficients.map((row, rowIndex) =>
      row.map((value, col) => (col === colIndex ? constants[rowIndex] : value))
    );
    return determinant(modified) / detA;
  });
}

function getMatrixData() {
  const values = [...matrixContainer.children].map((i) => Number(i.value));
  const matrix = [];

  for (let i = 0; i < MATRIX_SIZE; i++) {
    matrix.push(values.slice(i * MATRIX_SIZE, i * MATRIX_SIZE + MATRIX_SIZE));
  }

  const constants = [...constantsContainer.children].map((i) =>
    Number(i.value)
  );

  return { matrix, constants };
}

document.getElementById("solveBtn").addEventListener("click", () => {
  const { matrix, constants } = getMatrixData();
  const solution = cramersRule(matrix, constants);

  if (!solution) {
    resultDisplay.textContent = "No unique solution (determinant = 0)";
    return;
  }

  resultDisplay.textContent = solution
    .map((val, i) => `Variable ${i + 1}: ${val}`)
    .join("\n");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  createInputs();
  resultDisplay.textContent = "Waiting for input…";
});

createInputs();

// Nustatome matricos dydį ir laiko intervalą
const matrixSize = 50;
const interval = 60;

// Funkcija, kuri sugeneruoja atsitiktinę matricą
function generateMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push([]);
    for (let j = 0; j < size; j++) {
      matrix[i].push(Math.round(Math.random()));
    }
  }
  return matrix;
}

// Funkcija, kuri spausdina matricą į terminalo konsolę
function printMatrix(matrix) {
  console.clear();
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}

// Funkcija, kuri atnaujina matricą su naujomis reikšmėmis
function updateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Math.round(Math.random());
    }
  }
  return matrix;
}

// Pradinių matricos reikšmių generavimas
let matrix = generateMatrix(matrixSize);

// Pagrindinis ciklas, kuris atnaujina matricą ir spausdina ją į konsolę
setInterval(() => {
  matrix = updateMatrix(matrix);
  printMatrix(matrix);
}, interval);

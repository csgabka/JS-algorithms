function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

function sumOfSquares(n) {
  let sumOfSquares = 0;
  for (let i=1; i<=n; i++) {
    sumOfSquares += Math.pow(i,2);
  }
  return sumOfSquares;
}

function squareOfSum(n) {
  let squareOfSum = 0;
  let sum = 0;
  for (let j=1; j<=n; j++) {
    sum += j;
  }
  squareOfSum = Math.pow(sum, 2);
  return squareOfSum;
}

sumSquareDifference(5);

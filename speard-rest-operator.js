function walkingLength(a, b, c, ...restNumbers) {
  let sum = 0;
  for (let number of restNumbers) {
    sum += number;
  }
  return a + b + c + sum;
}

let restNumbers = [10, 21, 35, 24, 25, 36];
console.log(walkingLength(10, 21, 35, 24, 25, 36, 124));

let numbers = [12, 14, 64, 58, 24, 47, 34, 51, 61, 22];

let sum = 0;
for (const number of numbers) {
  sum = sum + number;
}

console.log(sum);

let rolls = [12, 32, 25, 61, 75, 98, 54, 64, 45, 62, 35];

for (const roll of rolls) {
  if (roll % 2 === 0) {
    console.log("The even rolls are ", roll);
  } else {
    console.log("The odd rolls are ", roll);
  }
}

function sumOfArray(array) {
  let sum = 0;
  for (const number of array) {
    sum = sum + number;
  }
  return sum;
}

let sumOfNumbers = sumOfArray(numbers);
console.log(sumOfNumbers);
let sumOfRolls = sumOfArray(rolls);
console.log(sumOfRolls);

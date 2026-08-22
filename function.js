function isEven(num) {
  if (num === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(7);
isEven(8);
const result = isEven(4);

console.log("is even", result);

function isEvenTen() {
  for (i = 0; i <= 0; i++) {
    if (i === 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("is even", isEvenTen());

function countUpToTen() {
  for (i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i, "is even");
    } else {
      console.log(i, "is odd");
    }
  }
}

countUpToTen();

function addlastName(firstName, lastname) {
  const fullName = firstName + " " + lastname;
  return fullName;
}

const addName = addlastName("habib", "uddin");
console.log(addName);

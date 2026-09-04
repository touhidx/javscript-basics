// 01

// function convertToCamelCase(sentence) {
//   let words = sentence.toLowerCase().split(" ");
//   let cleanWords = words.filter((word) => word !== "");

//   let camelCase = cleanWords.map((word, index) => {
//     if (index === 0) {
//       return word;
//     }

//     return word[0].toUpperCase() + word.slice(1);
//   });

//   return camelCase.join("");
// }

// convertToCamelCase("java script is fun");

// console.log(convertToCamelCase("hello     world"));

// 02

// function countEvenOdd(numbers) {
//   let evenOrOdd = {
//     even: 0,
//     odd: 0,
//   };
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       evenOrOdd.even += 1;
//     } else {
//       evenOrOdd.odd += 1;
//     }
//   }

//   return evenOrOdd;
// }
// console.log(countEvenOdd([1, 2, 3, 4, 5]));

// 03

// function findFirstUniqueChar(s) {
//   const toLowerCaseOfs = s.toLowerCase();
//   if (toLowerCaseOfs.length < 0 || toLowerCaseOfs.length > 1000) {
//     return "Invalid";
//   }

//   for (let i = 0; i < toLowerCaseOfs.length; i++) {
//     const char = toLowerCaseOfs[i];

//     if (toLowerCaseOfs.indexOf(char) === toLowerCaseOfs.lastIndexOf(char)) {
//       return char;
//     }
//   }
//   return -1;
// }
// console.log(findFirstUniqueChar("aakkjbb"));

// 04
// function findLongestWord(sentence) {
//   let clearWords = "";
//   for (let i = 0; i < sentence.length; i++) {
//     let char = sentence[i];
//     if (
//       (char >= "a" && char <= "z") ||
//       (char >= "A" && char <= "Z") ||
//       (char >= "0" && char <= "9") ||
//       char == " "
//     ) {
//       clearWords += char;
//     }
//   }
//   let words = clearWords.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     let searchingWord = words[i];
//     if (searchingWord.length > longestWord.length) {
//       longestWord = searchingWord;
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// let sentence = "Hello world, how are you today?";
// findLongestWord(sentence);

// 05

function findSecondLargestUnique(numbers) {
  let largest = null;
  let secoundLargest = null;
  for (let i = 0; i < numbers.length; i++) {
    let eachNum = numbers[i];
    if (eachNum === largest || eachNum === secoundLargest) {
      continue;
    }

    if (largest === null || largest < eachNum) {
      secoundLargest = largest;
      largest = eachNum;
    } else if (secoundLargest === null || secoundLargest < eachNum) {
      secoundLargest = eachNum;
    }
  }
  console.log(secoundLargest);
  return secoundLargest;
}
let numbers = [10, 5, 20, 5, 15];
findSecondLargestUnique(numbers);

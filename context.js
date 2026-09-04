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

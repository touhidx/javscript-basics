let arr = [20, 20, 14, 12, 52, 54, 54, 85];
let arr2 = [1, 2, 28];
console.log(arr);
// let pushh = arr.push(52);

// arr.pop();
// arr.shift();
// arr.unshift(56, 64);

// let hasItem = arr.includes(14);

// let mix = arr.concat(arr2);
// let cheack = Array.isArray(arr);
// let showing = arr.slice(3, 7);
// let joined = arr.join(" ");
// let reversed = arr.reverse();

// for (const index of arr) {
//   console.log(index);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let i = arr.length - 1;

let reverseArray = [];
while (i >= 0) {
  let index = reverseArray.push(arr[i]);
  i--;
}
// console.log(reversed);

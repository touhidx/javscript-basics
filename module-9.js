// for (let i = 0; i < 6; i++) {
//   console.log("Hello", i);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let i = 0;
// while (i < 8) {
//   console.log("loop is running !", i);
//   i++;
// }

// for (let i = 0; i <= 30; i++) {
//   if (i % 2 === 0) {
//     console.log("those numbers are even :", i);
//   }
// }

// let sum = 0;
// for (let i = 0; i <= 20; i++) {
//   sum = sum + i;
//   console.log(sum);
// }

// let num = 7;
// for (let i = 1; i <= 10; i++) {
//   let multi = num * i;
//   console.log(`${num} X ${i} = ${multi}`);
// }

// let sum = 0;
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//     console.log(sum);
//   }
// }

// for (let i = 0; i <= 50; i++) {
//   if (i > 30) {
//     console.log("the loops breaks here");
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 30; i++) {
//   if (i == 4) {
//     console.log("the code is coutinue");
//     continue;
//   }
//   console.log(i);
// }

// let y = 0;
// do {
//   console.log(y);
//   y++;
// } while (y > 10);

for (let i = 0; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log("this code is coutinue");
    continue;
  } else if (i > 40) {
    break;
  }
  console.log(i);
}

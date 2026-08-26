let commitment = "I will work hard and never give up.";
// const split = commitment.split("");
// const reverse = split.reverse();
// const join = reverse.join("");
// console.log(join);
let reverses = "";
for (const latter of commitment) {
  reverses = latter + reverses;
  console.log(latter, "=>", reverses);
}

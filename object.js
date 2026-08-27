// let car = {
//   color: "blue",
//   model: "BMW",
//   price: 202021,
// };
// console.log(car);

// const cart = {
//   id: 8820,
//   items: [
//     { id: "p101", name: "Wireless Mouse", tags: ["tech", "office"] },
//     {
//       id: "p102",
//       name: "Mechanical Keyboard",
//       tags: ["tech", "gaming", "rgb"],
//     },
//   ],
// };

// TODO:
// 1. Get the name of the second item ("Mechanical Keyboard")
// 2. Get the first tag of the second item ("tech")

// console.log(cart.items[1]?.name);
// console.log(cart.items[1]?.tags[0]);

// const rawProducts = [
//   { id: 101, name: "wireless mouse", price: 25, inStock: true },
//   { id: 102, name: "gaming headset", price: 80, inStock: false },
//   { id: 103, name: "mechanical keyboard", price: 120, inStock: true },
// ];

// let usingMap = rawProducts.map();
// console.log(usingMap);

// let str = "Javascript";

// let show = str.split("");
// let show1 = show.join("");

// console.log(show);
// console.log(show1);

// let sentence = "Learning JavaScript is fun!";
// let show = sentence.slice(-4, -1);
// console.log(show);

// let str1 = "hello";
// let str2 = "world";

// console.log(`${str1} ${str2}`);
// console.log(str1 + " " + str2);
// let plus = str1.concat(str2);
// console.log(plus);

// let reverseStr = "javascript";
// let reverse = [];
// for (let i = reverseStr.length - 1; i >= 0; i--) {
//   reverse.push(reverseStr[i]);
// }
// let reversed = reverse.join("");
// console.log(reverse);
// console.log(reversed);

// let reverseStr = "javascritpt";
// let reverses = [];
// for (let str of reverseStr) {
//   reverses.unshift(str);
// }
// let reversed = reverses.reverse().join("");
// console.log(reverses);
// console.log(reversed);

// let car = {
//   name: "habibi",
//   model: 2016,
// };

// car["color"] = "blue";
// console.log(car);

// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
// let arr = Object.keys(book);
// console.log(arr);
// let all = Object.entries(book);
// console.log(all);

// delete book.title;
// console.log(book);

// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701",
//   },
// };

// user.address["country"] = "australlia";
// let city = user?.address?.city;
// delete user.address?.zip;
// console.log(user.address);

// let scores = { math: 90, science: 85, art: 95 };
// let marks = 0;
// for (const key in scores) {
//   let mark = scores[key];
//   marks += mark;
// }
// console.log(marks);

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234",
};

let emailLowerCase = contact.email.toLowerCase();
contact.email = emailLowerCase;
console.log(contact);

let keyValuePairs = Object.entries(contact);

contact["properties"] = [];
contact.properties.push("hello", "world", "excited");
console.log(contact);

let reverse = contact?.name;
let reversing = [];
for (let word of reverse) {
  reversing.unshift(word);
  console.log(word);
}

let reversed = reversing.join("");
console.log(reversing);
console.log(reversed);

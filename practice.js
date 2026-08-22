let persons = [
  { name: "hafiz", age: 21, area: "bakhergonj" },
  {
    name: "mahfuz",
    age: 17,
    area: "babugonj",
  },
];

for (const person of persons) {
  if (person.age >= 18) {
    console.log("you can vote this year. as you are :", person.age);
  } else {
    let yearsNeedTo = 18 - person.age;
    console.log(`you can vote after ${yearsNeedTo} years latter`);
  }
}

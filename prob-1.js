// function studentIntroduction(student) {
//   if (
//     typeof student === "Object" ||
//     student.name !== undefined ||
//     student.age !== undefined ||
//     student.course !== undefined
//   ) {
//     return `My name is ${student["name"]}. I am ${student["age"]} years old. I am learning ${student["course"]}`;
//   } else {
//     return "Invalid";
//   }
// }

// const student = {
//   name: "Rafi",
//   age: 18,
//   course: "JavaScript",
// };

// console.log(studentIntroduction(student));

// function filterActiveUsers(users) {
//   console.log(Array.isArray(users));

//   if (Array.isArray(users) === true) {
//     for (const user of users)
//       if (
//         typeof user === "object" ||
//         (users !== null &&
//           users.isActive !== undefined &&
//           users.isActive === true)
//       ) {
//         return "active";
//       }
//   } else {
//     return "Invalid";
//   }
// }

// let users = [
//   { name: "A", isActive: true },
//   { name: "B", isActive: false },
// ];

// console.log(filterActiveUsers(users));

function filterActiveUsers(users) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (
      user.isActive === undefined ||
      !Array.isArray(users) ||
      users.length === 0
    ) {
      return "Invalid";
    } else {
      const activeUsers = [];
      for (let i = 0; i < users.length; i++) {
        if (users[i].isActive === true) {
          activeUsers.push(users[i]);
          return activeUsers;
        } else {
          return "Invalid";
        }
      }
    }
  }

  // Step 4: build a new array with only active users
}

let users = [
  { name: "A", isActive: false },
  { name: "B", isActive: false },
];

console.log(filterActiveUsers(users));

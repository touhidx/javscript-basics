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

// function filterActiveUsers(users) {
//   for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (
//       user.isActive === undefined ||
//       !Array.isArray(users) ||
//       users.length === 0 || 
//       user === null
//     ) {
//       return "Invalid";
//     } else {
//       const activeUsers = [];
//       for (let i = 0; i < users.length; i++) {
//         if (users[i].isActive === true) {
//           activeUsers.push(users[i]);
//           return activeUsers;
//         } else {
//           return "Invalid";
//         }
//       }
//     }
//   }
// }


// function filterActiveUsers(users) {
//   if (!Array.isArray(users)) {
//     return "Invalid"
//   }
//   if (users.length === 0) {
//     return "Invalid"
//   }

//   for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user === null || typeof user !== "object" || user.isActive === undefined) {
//       return "Invalid"
//     }
//   }
//   const activeUsers = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive === true) {
//       activeUsers.push(users[i])
//     }
//   }

//   return activeUsers;
// }




// let users = [
//   { name: "A", isActive: false },
//   { name: "B", isActive: false },
// ];

// console.log(filterActiveUsers(users));






// function countHashtags(caption) {
//   if (typeof caption !== "string") {
//     return "Invalid";
//   }
//   let hashtagCount = 0;
//   let longestTag = "";
//   let currentWord = "";

//   for (let i = 0; i < caption.length; i++) {
//     const char = caption[i];

//     if (char === " ") {
//       if (currentWord[0] === "#") {
//         hashtagCount++;
//         const tag = currentWord.slice(1); 
//         if (tag.length > longestTag.length) {
//           longestTag = tag
//         }
//       }
//       currentWord = ""
//     } else {
//       currentWord = currentWord + char
//     }
//   }
//   if (currentWord[0] === "#") {
//     hashtagCount++;
//     const tag = currentWord.slice(1)
//     if (tag.length > longestTag.length) {
//       longestTag = tag
//     }
//   }

//   return { hashtagCount, longestTag };
// }



function bonusScore(scores) {
  if (!Array.isArray(scores || scores.length === 0)) {
    return "Invalid"
  }
  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] !== "number") {
      return "Invalid"
    }else{
        let total = 0
          const updatedScore = scores[i] + 10
    total = total + updatedScore
    }
      return total

  }
}

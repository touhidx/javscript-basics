// function countNumberProperties(numbers) {
//   let kindOfNum = {
//     even: 0,
//     negative: 0,
//     odd: 0,
//     positive: 0,
//   };

//   if (numbers.length === 0) {
//     return "The array is empty";
//   }
//   for (const number of numbers) {
//     if (number > 0) {
//       kindOfNum["positive"]++;
//     } else if (number < 0) {
//       kindOfNum["negative"]++;
//     }

//     if (number % 2 === 0) {
//       kindOfNum["even"]++;
//     } else if (number % 2 !== 0) {
//       kindOfNum["odd"]++;
//     }
//   }
//   console.log(kindOfNum);

//   return kindOfNum;
// }
// countNumberProperties([-5, 0, 3, -4, 1]);

function extractBodyContent(htmlString) {
  let startTag = "<body>";
  let endTag = "</body>";
  let startIndex = htmlString.indexOf(startTag) + startTag.length;
  let endIndex = htmlString.indexOf(endTag);

  if (startIndex === -1 || endIndex === -1) {
    return "there is no <body> </body>  tag in this code !";
  }
  let innerBodyTag = "";
  let foundTags = "";
  for (const tag of htmlString) {
    innerBodyTag += tag;
    foundTags = innerBodyTag.slice(startIndex, endIndex);
  }
  return foundTags.trim();
}

let htmlString = `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`;

extractBodyContent(htmlString);

// 01
function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}

console.log(describeValue(0));

// 02
function getDayType(day) {
  switch (day) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

console.log(getDayType("saturday"));

// 03
function validateUsername(username) {
  if (username.length < 4) return "Too Short";
  if (username.includes(" ")) return "No Space Allowed";
  if (username.toLowerCase().includes("admin")) return "Reserved Word";
  return "Available";
}

console.log(validateUsername("adm"));

// 04

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;
  if (distance < 2 && distance > 0) {
    return 50;
  }
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }
  const waitingCharge = waitingMinutes * 2;
  let total = fare + waitingCharge;
  if (isNight) {
    total += total * (20 / 100);
  }

  return total;
}

console.log(getCngFare(5, true, 10));

// 05

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) return "Won";
  if (ballsLeft <= 0) return "Lost";

  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict;
  if (requiredRate <= 6) verdict = "Comfortable";
  else if (requiredRate > 6 && requiredRate <= 12) verdict = "Tough";
  else verdict = "Almost Impossible";

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(100, 70, 12));

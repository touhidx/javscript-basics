function isElevatorSafe(weights) {
  if (Array.isArray(weights)) {
    let total = 0;
    for (const weight of weights) {
      total += weight;
    }
    return total <= 400;
  } else {
    return "Invalid";
  }
}

function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  } else if (tokensUsed <= 500) {
    return 0;
  } else {
    const extraTokens = tokensUsed - 500;
    const blocksOf100 = Math.floor(extraTokens / 100);
    return blocksOf100 * 5;
  }
}

function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  } else if (Array.isArray(restaurants) || restaurants.length !== 0) {
    let top = restaurants[0];
    for (let i = 1; i < restaurants.length; i++) {
      if (restaurants[i].rating > top.rating) {
        top = restaurants[i];
      }
    }
    return top.name.toUpperCase();
  }
}

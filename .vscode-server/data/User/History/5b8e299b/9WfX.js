// Function to calculate fare based on distance
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
      return "Free sample";
  } else if (distance > 400 && distance <= 2000) {
      return "$20 charge";
  } else if (distance > 2000 && distance <= 2500) {
      return "$30 charge";
  } else {
      return "Ride not allowed";
  }
}

// Function to check if the city is NYC
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function to return response based on tip amount
function switchOnCharmFromTip(tip) {
  switch (tip) {
      case "generous":
          return "Thank you so much.";
      case "not as generous":
          return "Thank you.";
      default:
          return "Bye.";
  }
}

// Export functions to make them available for testing
module.exports = { 
  scuberGreetingForFeet, 
  ternaryCheckCity, 
  switchOnCharmFromTip 
};
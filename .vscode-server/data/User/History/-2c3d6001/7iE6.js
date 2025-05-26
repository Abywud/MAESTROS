// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}
console.log(distanceFromHqInBlocks(50));



function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}

// Example usage:
console.log(distanceFromHqInFeet(50)); // Output: 2112 feet
console.log(distanceFromHqInFeet(34)); // Output: 2112 feet


function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}

// Example usage:
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056 feet

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
      return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for rides between 2000 and 2500 feet
  } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
  }
}

// Example usage:
console.log(calculatesFarePrice(34, 38)); // Output: 11.52
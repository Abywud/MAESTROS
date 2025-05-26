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


function scuberGreetingForFeet(){
  // Write your code here!
  function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
      return "free sample";
    } else if (distance > 400 && distance <= 2000) {
      return "$20 charge";
    } else if (distance > 2000 && distance <=2500) {
      return "$30 charge";
    }else{
      return "not allowed"
    }
  }
  
  module.exports = scuberGreetingForFeet;
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}
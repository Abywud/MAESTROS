// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
 saturdayFun()

 

 //function mondayWork(activity= " go to the office"){
  //  return `This Monday, I will ${activity}` }

   // console.log(mondayWork()); // "This Monday, I will go to the office."
//console.log(mondayWork("work from home")); // "This Monday, I will work from home."

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper = "*") {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}

// Example usage:
console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const emphatic = wrapAdjective("!!!");
console.log(emphatic("amazing")); // "You are !!!amazing!!!"

module.exports = { mondayWork, wrapAdjective }; // Export both functions
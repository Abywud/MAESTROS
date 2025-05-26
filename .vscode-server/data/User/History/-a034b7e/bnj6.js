variable_manipulation


let myString = "Hello, World";  
let myNumber = 23;              
let myBoolean = true;           
let myArray = [1, 2, 3, 4, 5];  


console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Array:", myArray);



let stringToArray = myString.split("");
console.log("String converted to array:", stringToArray);


let numberToString = myNumber.toString();
console.log("Number converted to string:", numberToString);





conditional_statements
function checkAge(age) {
    // Convert input to a number
    let numAge = Number(age);

    // Check if the input is a valid number
    if (isNaN(numAge) || numAge < 0) {
        return "Invalid input.";
    }

    // Use a switch statement to determine the age category
    switch (true) {
        case numAge < 18:
            return "You are a minor.";
        case numAge >= 18 && numAge < 65:
            return "You are an adult.";
        case numAge >= 65:
            return "You are a senior citizen.";
        default:
            return "Invalid input."; // Fallback case
    }
}


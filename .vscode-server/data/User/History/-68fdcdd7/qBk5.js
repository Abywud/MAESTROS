// Task 1 variable_manipulation


let myString = "Hello, World";  
let myNumber = 23;              
let myBoolean = true;           
let myArray = [1, 2, 3, 4, 5];  


console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Array:", myArray);


// Converting a string into an array of characters
let stringToArray = myString.split("hello");
let arr = stringToArray.split("hello");
console.log("arr");


//Converting a number into a string
let numberToString = myNumber.toString(123);
let str = 
console.log("Number converted to string:", numberToString);





conditional_statements

function checkAge(age) {
    let numAge = Number(age);

    if (isNaN(numAge) || numAge < 0) {
        return "Invalid input.";
    }

    
    switch (true) {
        case numAge < 18:
            return "You are a minor.";
        case numAge >= 18 && numAge < 65:
            return "You are an adult.";
        case numAge >= 65:
            return "You are a senior citizen.";
        default:
            return "Invalid input."; 
    }
}



Functions_and_Scope

function calculateArea(shape, dimension1, dimension2) {
    let area; 

    switch (shape.toLowerCase()) {
        case "rectangle":
            area = dimension1 * dimension2;
            break;
        case "circle":
            area = Math.PI * dimension1 * dimension1;
            break;
        case "triangle":
            area = (dimension1 * dimension2) / 2;
            break;
        default:
            return "Invalid shape";
    }

    return area;
}

 Functions_and_Scope

function testScope() {
    let scopedVariable = "I am inside the function";
}
testScope();


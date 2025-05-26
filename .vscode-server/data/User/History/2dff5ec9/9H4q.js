// Write your solution here!

//const cats = [ "Milo", "Otis","Garfield"]

// Define the array
const cats = ["Milo", "Otis", "Garfield"];


beforeEach(() => {
    cats.length = 0; // Clear the array without reassigning
    cats.push("Milo", "Otis", "Garfield"); // Refill it
});

// Functions that modify the array

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Functions that return a new array without modifying the original

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}



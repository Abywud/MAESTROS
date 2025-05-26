// Write your solution here!

//const cats = [ "Milo", "Otis","Garfield"]


const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name); // Mutates the original array
}

module.exports = { cats, destructivelyAppendCat };




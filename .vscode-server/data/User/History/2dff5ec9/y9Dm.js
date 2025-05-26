// Write your solution here!

//const cats = [ "Milo", "Otis","Garfield"]


const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name); // Mutates the original array
}

module.exports = { cats, destructivelyAppendCat };



const { cats, destructivelyAppendCat } = require("../index");

beforeEach(() => {
    // Reset the cats array to its original state before each test
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

describe("destructivelyAppendCat", () => {
    it("appends a cat to the end of the cats array", () => {
        destructivelyAppendCat("Ralph");
        expect(cats).to.eql(["Milo", "Otis", "Garfield", "Ralph"]);
    });
});
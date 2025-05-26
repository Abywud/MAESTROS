// Write your solution here!

//const cats = [ "Milo", "Otis","Garfield"]


let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name); // Mutates the original array
}

module.exports = { cats, destructivelyAppendCat };



const { destructivelyAppendCat } = require("../index");
const cats; // Declare cats globally in the test file

beforeEach(() => {
    // Reset the cats array before each test
    cats = ["Milo", "Otis", "Garfield"];
});

describe("destructivelyAppendCat", () => {
    it("appends a cat to the end of the cats array", () => {
        destructivelyAppendCat("Ralph");
        expect(cats).to.eql(["Milo", "Otis", "Garfield", "Ralph"]);
    });
});

// Write your solution here!

//const cats = [ "Milo", "Otis","Garfield"]


const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("name");
}
cats.length = 0


const newcats = [...cats, "Ralph"]

//////////////////////
// GLOBAL VARIABLES //
//////////////////////
let alphabet = "abcdefghijklmnopqrstuvwxyz";
function letter(){
    let index= Math.random()*alphabet.length;
    index= Math.floor(index);
    console.log(alphabet[index]);
}
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
function fastfood(){
    let food= Math.random()*foods.length;
    food= Math.floor(food);
    console.log(foods[food]);
}
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
function school(){
    let people= Math.random()*students.length;
    people= Math.floor(people);
    console.log(students[people]);
}
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";


function randomNumber(){
    // Math.floor(Math.random * 21 + 1)
    console.log( Math.floor(Math.random() * 21 + 1));
}
randomNumber();

function randomLetter(){
   let letter = alphabet.charAt(Math.floor(Math.random()*26 +1));
console.log(letter);
}
randomLetter();

const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];

function randomFood(){
    let single = foods[Math.floor(Math.random()*5 +1)];
    console.log(single);

}
randomFood();



const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

functions randomStudent


/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
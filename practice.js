//////////////////PROBLEM 1////////////////////

// Create a variable called myName that is a string data type
var myName = "John Paul Garcia";
// Code here

//////////////////PROBLEM 2////////////////////

// Create a variable called myAge that is a number data type
var myAge = 20;
// Code here

//////////////////PROBLEM 3////////////////////

// Create a variable called lovesCode that is a boolean data type
var lovesCode = !false;
// Code here

//////////////////PROBLEM 4////////////////////

// Create a variable called greatestFear that is undefined because we fear nothing
var greatestFear = undefined;
// Code here

//////////////////PROBLEM 5////////////////////

// Create a variable called boomCampGoal that is null because we are just starting out
var boomCampGoal = null;
// Code here

//////////////////PROBLEM 6////////////////////

// Create a function declaration called greeting that
// accepts name as its only parameter.
// greeting should return the string "Hello, "
// plus the value of the name parameter.

function greeting(name) {
  return "Hello, "+name;
}
// Code here

//////////////////PROBLEM 7////////////////////

// Rewrite the function greeting as a function expression.
// Name it newGreeting.
var newGreeting = function(name) {return "Hello, "+name;}
// Code Here

//////////////////PROBLEM 8////////////////////

// Create an array called groceries with the values
// "apples", "milk", "eggs", "bread"
let groceries = ["apples","milk","eggs","bread"];
// Code Here

//////////////////PROBLEM 9////////////////////

// Create an object saved to the variable dog.
// The dog object should have the following properties:
// name (a string), color (a string), age (a number),
// and goodBoy (a boolean).

// Code Here
let dog = new Object();
dog = {name: "Luke",color: "red",age: 0,goodBoy: true}
// ...access the dog's name from the object and assign it to a
// variable called boomCampClassPet.

// Code Here
let boomCampClassPet = dog.name;
//////////////////PROBLEM 10////////////////////

// Write a function called nameCheck that takes in a name parameter.
// nameCheck should check if the name equals 'Steven'. If it does,
// return 'What is up Steven?'
// If the name parameter is Bryan, return 'Hey Bryan!'
// If the name parameter is anything else, return 'Cool name, NAMEPARAM'
// with NAMEPARAM being the name parameter being passed in

// Code here
function nameCheck(name) {
   switch(name) {
     case "Steven": return "What is up Steven?";
     case "Bryan": return "Hey Bryan!";
     default: 
        return "Cool name, "+name;
   }
}
//////////////////PROBLEM 11////////////////////

// Create a function called add that takes in two parameters
// that will be numbers.
// The add function should return the two parameters added together

// Code Here
function add(x,y){
  return x+y;
}
// Now invoke add, passing in the numbers 3 and 4
// storing the result in the variable mathSum.

// Code Here
let mathSum = add(3,4);
//////////////////PROBLEM 12////////////////////

// Write a function called faveColorFinder that takes in one parameter called color
// that will be a string.
// If the passed in color equals 'red', return 'red is a great color'
// If the passed in color equals 'green', return 'green is a solid favorite color'
// If the passed in color equals 'black', return 'so trendy'
// Otherwise, you should return the string 'you need to evaluate your favorite color choice'

// Code here
function faveColorFinder(color){
  switch(color){
    case "red": return "red is a great color";
    case "green":  return "green is a solid favorite color";
    case "black": return "so trendy";
    default:
        return "you need to evaluate your favorite color choice";
  }
}
//////////////////PROBLEM 13////////////////////

let duck = 'cute';

function bathroom() {
  let rubberDuck = 'squeaky';
  function bathtub() {
    let sailorDuck = 'nautical';
  }
}

function pond() {
  let realDuck = 'fluffy';
}

// There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
// all within different scopes.
// Given the functions and variables above, edit the arrays
// below to contain only the appropriate variable names
// as strings.

// This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ['duck'];

// This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ['duck','rubberDuck'];

// This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ['duck','rubberDuck','sailorDuck'];

// This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ['duck','realDuck'];

//////////////////PROBLEM 14////////////////////

// Create a variable called age with your age assigned to you

// Code Here
let age = 20;
// FLASH FORWARD TO NEXT YEAR
// reassign the value of age to be one greater than it was, because, we all get older
age = 21;
// Code Here

// Good news! We can live forever. Set your age to 999
age = 999;
// Code Here

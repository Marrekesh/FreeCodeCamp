//FREECODECAMP BASIC

// create variable
var myName;

//Assign the value
var a;
a = 7;

//Assign the contents of a to variable b
var a;
a = 7;
var b;
b = a

//Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// Modify the existing declarations and assignments so their names use camelCase.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Update the code so it only uses the let keyword.

var catName = "Oliver";
var catSound = "Meow!";

let catName = "Oliver";
let catSound = "Meow!";


// Change the code so that all variables are declared using let or const

const fCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(fCC, fact); 

// Измените 0так, чтобы сумма была равна 20.

const sum = 10 + 10;

// Change the 0 so the difference is 12.

const difference = 45 - 33;

// Change the 0 so that product will equal 80.

const product = 8 * 10;

// Change the 0 so that the quotient is equal to 2.

const quotient = 66 / 33;

// Change the code to use the ++ operator on myVar.

let myVar = 87;

myVar++;

// Change the code to use the -- operator on myVar.

let myVariable = 11;

// Only change code below this line
myVariable--;

// Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).

const myDecimal = 6.1;

// Change the 0.0 so that product will equal 5.0.

const productN = 2.0 * 2.5;

//Change the 0.0 so that quotient will equal to 2.2.

const quotientN = 4.4 / 2.0;

// Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.

const remainder = 11 % 3;

// Convert the assignments for a, b, and c to use the += operator.

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Convert the assignments for a, b, and c to use the -= operator.

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// Convert the assignments for a, b, and c to use the *= operator.

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// Convert the assignments for a, b, and c to use the /= operator.

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

//Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
//I am a "double quoted" string inside "double quotes".

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";


// Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.

const myString =  "This is the start. " + "This is the end.";

// Создайте myStrнесколько строк, соединив эти две строки: This is the first sentence.и This is the second sentence.используя +=оператор.

let myString1 = "This is the first sentence";
myStr += " This is the second sentence"

// Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!

const myName = "Dima";
const myStrg = "My name is" + myName + "and I am well";

// Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

const someAdjective = "wery well";
let myStrinh = "Learning to code is ";

myStr += someAdjective

// Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
// Setup
let firstLetterOfLastName = "";
const lastNames = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.


let myStrl = "Jello World";

myStrl = "Hello World"; 

console.log(myStrl[0])


//Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

const lastNamese = "Lovelace";

const thirdLetterOfLastName = lastNamese[2]; // Change this line

//Use bracket notation to find the last character in the lastName variable.

const lastNamer = "Lovelace";
const lastLetterOfLastName = lastNamer[lastNamer.length - 1]; 

// Use bracket notation to find the second-to-last character in the lastName string.


const lastNamea = "Lovelace";
const secondToLastLetterOfLastName = lastNamea[lastNamea.length - 2]; 


//You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

//Modify the new array myArray so that it contains both a string and a number (in that order).

const myArray = ["peanut butter", 5];

//Modify the data stored at index 0 of myArray to a value of 45.

const myArrayq = [18, 64, 99];
myArrayq[0] = 45

//Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

const myArrayr = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArrayr.pop()
// Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

// Complete the regex petRegex to match the pets dog, cat, bird, or fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

//Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let res = twinkleStar.match(starRegex); // Change this line
console.log(res)

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

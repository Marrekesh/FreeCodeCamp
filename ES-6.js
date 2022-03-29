// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  //An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

  const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  return s.sort()
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS)

    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
const PI = freezeObj();

//Перепишите функцию, назначенную переменной magic, которая возвращает a, new Date()чтобы использовать синтаксис стрелочной функции. Кроме того, убедитесь, что ничего не определено с использованием ключевого слова var.

const magic = () => new Date()


// Перепишите myConcatфункцию, которая добавляет содержимое arr2к arr1, чтобы она использовала синтаксис стрелочной функции.

const myConcat = (arr1, arr2) => arr1.concat(arr2);
  
console.log(myConcat([1, 2], [3, 4, 5]));

//Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  
  const { today, tomorrow} = HIGH_TEMPERATURES

  //Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
    
   const { today: highToday , tomorrow: highTomorrow } = HIGH_TEMPERATURES
  

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today:{low: lowToday, high: highToday} } = LOCAL_FORECAST


//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
// Only change code below this line

[b, a] = [a, b]

console.log(b, a)

//Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const  [a, b, ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);

//Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};


const half = ({max, min}) => (max + min) / 2.0; 

// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};


function makeList(arr) {
  // Only change code below this line

  const failureItems = arr.map((item) => {
    return (
      `<li class="text-warning">${item}</li>`
    )
  })
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// Use object property shorthand with object literals to create and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};

// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.
class Vegetable {
  constructor(name) {
    this.name = name
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


//

class Thermostat {
  constructor(temperatureF) {
    this._temperatureF = temperatureF

  }

  get temperature() {  
    return 5 / 9 * (this.__temperatureF - 32)
  }

  set temperature(updateTemperatureF) {
    this._temperatureF = updateTemperatureF
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
// temp = thermos.temperature; // 26 in Celsius

// Add a script to the HTML document of type module and give it the source file of index.js
<html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>

// There are two string-related functions in the editor. Export both of them using the method of your choice.

export const uppercaseString = (string) => {
  return string.toUpperCase();
}

 export const lowercaseString = (string) => {
  return string.toLowerCase()
}

// Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

import { uppercaseString, lowercaseString } from './string_functions.js'
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

// The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions

import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// The following function should be the fallback value for the module. Please add the necessary code to do so.
export default function subtract(x, y) {
  return x - y;
}

// In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

// Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.
const makeServerRequest = new Promise((resolve, reject) => {
  
})

// Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result)
})

// Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest
.then(result => {
  console.log(result);
})
.catch(error => console.log(error))
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


let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a)

let sumAB = a + b;
console.log(sumAB);

// После этого используйте console.logдля регистрации outputпеременной. Просмотрите две консоли, чтобы увидеть журнал. Наконец, используйте console.clearпосле вашего журнала, чтобы очистить консоль браузера. Посмотрите разницу в двух консолях.

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output)
console.clear()

// Добавьте два console.log()оператора для проверки typeofкаждой из двух переменных sevenи threeв коде.
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line

console.log(typeof seven)
console.log(typeof three)

// Исправьте две орфографические ошибки в коде, чтобы netWorkingCapitalвычисления работали.
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// Исправьте две парные ошибки в коде.

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Исправьте строку, чтобы она либо использовала другие кавычки для hrefзначения, либо экранировала существующие. Держите двойные кавычки вокруг всей строки.
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// Исправьте условие, чтобы программа выполняла правильную ветвь, а соответствующее значение было присвоено result.
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// Исправьте код, чтобы для переменной resultбыло установлено значение, возвращаемое при вызове функции getNine.
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);

//   Функция raiseToPowerвозводит основание в степень. К сожалению, он не вызывается должным образом - исправьте код, чтобы значение powerбыло ожидаемым 8.
function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);

  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      row = []
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);

//   Функция myFunc()содержит бесконечный цикл, потому что терминальное условие i != 4никогда не будет оцениваться false(и прерывать цикл) — iбудет увеличиваться на 2 при каждом проходе и перескакивать сразу через 4, поскольку iначало нечетно. Исправьте оператор сравнения в терминальном условии, чтобы цикл выполнялся только для iзначений меньше или равных 4.
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }

  g
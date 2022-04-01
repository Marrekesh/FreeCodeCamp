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

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

// Match all the letters in the string quoteSample.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[A-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// Создайте одно регулярное выражение, которое соответствует диапазону букв между hи sи диапазону чисел между 2и 6. Не забудьте включить соответствующие флаги в регулярное выражение.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result =quoteSample.match(myRegex) ; // Change this line

// Вы хотите найти совпадения, когда буква sвстречается один или несколько раз в Mississippi. Напишите регулярное выражение, использующее +знак.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

// Исправьте регулярное выражение /<.*>/, чтобы оно возвращало тег HTML, <h1>а не текст "<h1>Winter is coming</h1>". Помните, что подстановочный знак .в регулярном выражении соответствует любому символу.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/ig; // Change this line
let result = text.match(myRegex);

// Напишите жадное регулярное выражение, которое находит одного или нескольких преступников в группе других людей. Преступника изображают с большой буквы C.
let reCriminals = /C+/g; // Change this line

// Используйте символ вставки в регулярном выражении для поиска Calтолько в начале строки rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

// Используйте символ вставки в регулярном выражении для поиска Calтолько в начале строки rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//Используйте символ привязки ( $) для сопоставления строки cabooseв конце строки caboose.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// Используйте класс сокращенных символов \wдля подсчета количества буквенно-цифровых символов в различных кавычках и строках.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//Используйте класс сокращенных символов \dдля подсчета количества цифр в названиях фильмов. Выписанные цифры ("шесть" вместо 6) не засчитываются.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

// Используйте класс сокращенных символов для нецифр \D, чтобы подсчитать, сколько нецифр в названиях фильмов.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//Измените регулярное выражение userCheck, чтобы оно соответствовало перечисленным выше ограничениям.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

//Измените регулярное выражение countWhiteSpaceдля поиска нескольких пробельных символов в строке.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

// Измените регулярное выражение countNonWhiteSpace, чтобы оно искало в строке несколько символов, отличных от пробелов.
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\s/no/; // Change this line
let result = ohStr.match(ohRegex);

console.log(result)

//Измените регулярное выражение ohRegex, чтобы оно соответствовало всей фразе Oh noтолько тогда, когда она 3должна 6содержать буквы h.

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/ig; // Change this line
let result = ohRegex.test(ohStr);

// Измените регулярное выражение timRegex, чтобы оно соответствовало слову, Timberтолько если оно состоит из четырех букв m.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/gi; // Change this line
let result = timRegex.test(timStr);

//Измените регулярное выражение favRegex, чтобы оно соответствовало версии слова в американском английском ( favorite) и британском английском ( favourite).
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

//Используйте просмотр вперед pwRegexдля сопоставления паролей, длина которых превышает 5 символов и состоит из двух последовательных цифр.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

// Исправьте регулярное выражение, чтобы оно проверяло имена Franklin Rooseveltили Eleanor Rooseveltс учетом регистра и делало уступки для отчества.
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
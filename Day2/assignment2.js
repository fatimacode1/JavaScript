/***************************************
 JavaScript Day 2 – Full Assignment
***************************************/

/* ========= Part A: Identifiers & Naming ========= */

// Problem 1 & 2 – Correct variable names
let firstName = "Alice";
let secondPlace = 2;
let userEmail = "alice@example.com";
let totalPrice = 250;
let amount = 500;
let myVariable = "test";
let privateData = "secret";
let userAge = 25;

// Corrected versions
let userName = "Alice";
let firstPrize = 1000;
let totalCost = 250;
let userAgeFixed = 25;

/* ========= Part B: Booleans & Data Types ========= */

let emailAddress = "john@example.com";
let isLoggedIn = true;
const maxAttempts = 3;
let finalGrade = 85;
let productPrice = 99.99;

let isRaining = false;
let isAdult = true;
let isPasswordMatch = false;

// Dynamic typing
let x = 10;
console.log(typeof x); // number
x = "Hello";
console.log(typeof x); // string
x = true;
console.log(typeof x); // boolean

/* ========= Part C: Strings & Indexing ========= */

let language = "JavaScript";
console.log(language[0]); // J
console.log(language[4]); // S
console.log(language[language.length - 1]); // t
console.log(language.length); // 10

/* ========= Part D: Template Literals ========= */

// String creation
let message1 = "Hello World";
let message2 = 'It\'s a sunny day';
let message3 = "He said, \"Hello!\"";

let first = "John";
let last = "Doe";
let fullName = `${first} ${last}`;
let greeting1 = `Hello, ${fullName}!`;

let age = 25;
let info = `${first} is ${age} years old`;

// Conversions
let name = "Alice";
let score = 95;
let message = `Student ${name} scored ${score} points.`;

let product = "Laptop";
let price = 999;
let quantity = 2;
let total = price * quantity;
let receipt = `Item: ${product}, Quantity: ${quantity}, Total: $${total}`;

let cityName = "Paris";
let temperature = 25;
let weather = `The temperature in ${cityName} is ${temperature} degrees.`;

let hourOfDay = 14;
let userName2 = "Bob";
let greeting2 = `Good afternoon, ${userName2}! It's ${hourOfDay}:00.`;

/* ========= Part E: Null & Undefined ========= */

let scoreValue;
console.log(scoreValue); // undefined

let winner = null;
console.log(winner); // null

let user = { name: "Alice" };
console.log(user.age); // undefined

/* ========= Part F: Comparison Operators ========= */

console.log(10 > 5); // true
console.log(3 < 2); // false
console.log(5 >= 5); // true
console.log(8 <= 10); // true
console.log(7 != 7); // false
console.log(15 > 20); // false

/* ========= Part G: == vs === ========= */

console.log(5 == 5); // true
console.log(5 === 5); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(0 == false); // true
console.log(0 === false); // false

let ageCheck = 18;
console.log(ageCheck >= 18); // true

let temp = 30;
console.log(temp > 25); // true

let scoreCheck = 75;
console.log(scoreCheck < 60); // false

/* ========= Part H: String Comparison ========= */

console.log('a' > 'A'); // true
console.log('b' < 'c'); // true
console.log('apple' < 'banana'); // true
console.log('Z' < 'a'); // true
console.log("10" < "2"); // true

let str1 = "Hello";
let str2 = "HELLO";
console.log(str1.toLowerCase() === str2.toLowerCase()); // true

let userInput = "10";
if (Number(userInput) === 10) {
  console.log("Input is 10");
}

/* ========= Part I: Practical Challenges ========= */

let userName3 = "Sarah";
let hour = 9;
let greeting3 = `Good morning, ${userName3}!`;
console.log(greeting3);

let userAge2 = 16;
let minimumAge = 18;
let isOldEnough = userAge2 >= minimumAge;
console.log(isOldEnough); // false

let email = "alice@example.com";
let firstChar = email[0];
let isValid = firstChar >= 'a' && firstChar <= 'z';
console.log(isValid);

let productName = "Wireless Mouse";
let productPrice2 = 29.99;
let inStock = true;
let description = `Product: ${productName} | Price: $${productPrice2} | In Stock: ${inStock}`;
console.log(description);

let fName = "John";
let mName = "Robert";
let lName = "Smith";
let initials = `${fName[0]}.${mName[0]}.${lName[0]}.`;
console.log(initials);

/* ========= Part J: Debugging ========= */

let firstPlace = "Gold";
let userNameFixed = "Alice";
let totalCostFixed = 100;
let ageFixed = 18;

if (ageFixed === 18) {
  console.log("You can vote");
}

let messageFixed = "It's a beautiful day";

let userInput2 = "25";
if (Number(userInput2) === 25) {
  console.log("Input is correct");
} else {
  console.log("Input is incorrect");
}

/* ========= Bonus: Password Validator ========= */

let password = "Pass123";

let isLongEnough = password.length >= 6;
let startsWithUppercase = password[0] >= 'A' && password[0] <= 'Z';
let endsWithNumber = password[password.length - 1] >= '0' &&
                     password[password.length - 1] <= '9';

console.log("Password is long enough:", isLongEnough);
console.log("Starts with uppercase:", startsWithUppercase);
console.log("Ends with number:", endsWithNumber);

/***************************************
 END OF ASSIGNMENT
***************************************/

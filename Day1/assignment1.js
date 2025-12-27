//PART - A | Variable Declaration and Data Types

// Problem 1 - Create Variables

let fName = "Fatima";
let age = 20;
let isStudent = true;
let favColor = "Black";
let siblings = 2;

//Problem 2 - Type Checking
console.log(typeof fName); //string
console.log(typeof age); //number
console.log(typeof isStudent); //boolean
console.log(typeof favColor); //string
console.log( typeof siblings); //number

//Problem 3 - Undefined vs Null

let score;
console.log(score); //undefined (light) 
console.log( typeof score); //undefined

let winner = null;
console.log(winner); //null
console.log(typeof winner); //object

// undefined means the variable is declared but no value is assigned to it.
// null means the variable is intentionally set to no value.

// Problem 4 - Strings

let firstName = "Fatima";
let lastName = "Ahmed";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Problem 5 - Type Conversion
// Prediction 
// 53
// string

let a = "5";
let b = 3;
let result = a + b;
console.log(result); //53
console.log(typeof result); //string

// This happened because "5" is a string.
// When + is used with a string, JavaScript converts 3 to a string and performs string concatenation.
// ---------------------------------------------------
// + is a special operator, if either value is a string, it performs string concatenation, unlike other operators which perform numeric operations if possible.

// + is a special operator in JavaScript.
// It performs addition when both values are numbers,
// and string concatenation when either value is a string.
// ----------------------------------------------------


// PART - B - ARITHMETIC OPERATIONS

// Problem 6 - Basic Calculator

let num1 = 45;
let num2 = 12;

console.log( num1 + num2); //57
console.log( num1 - num2); //33
console.log( num1 * num2); //540
console.log( num1 / num2); //3.75
console.log( num1 % num2); //9

// Problem 7 - Temperature Converter

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32

console.log(`25°C is equal to ${fahrenheit} °F`); //77 °F

// Problem 8 - Circle Calculations

let radius = 7;


let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log(circumference.toFixed(2));
console.log(area.toFixed(2));


// Problem - 9 - Shopping Bill

let notebooks = 3 * 45;
let pens = 2 * 15;
let backpack = 850;

let subtotal = notebooks + pens + backpack;
let discount = subtotal * 0.10;
let finalTotal = subtotal - discount;

console.log(subtotal);
console.log(discount);
console.log(finalTotal);

// Problem 10 - Even or Odd

let number = 17;
if (number % 2 === 0) {
    console.log(`${number} is even`);
    
} else {
    console.log(`${number} is odd`);
    //17 is odd
}

// PART - C | OPERATOR PRECEDENCE

// Problem  11 - Predict Output

//BODMAS - BRACKET OF DIVISION MULTIPLICATION ADDITION SUBTRACTION

// (a) 

// prediction - 20
/// actual output - 20 

let resul1 = 10 + 5 * 2;
console.log(resul1);

// (b)

// prediction - 30
/// actual output - 30

let result2 = (10 + 5) * 2;
console.log(result2);

// (c)

// prediction - 35
// did multiply by mistake instead of plus
/// actual output - 11 

let result3 = 20/4 + 3 * 2;
console.log(result3);

// (d)

// prediction - 13
/// actual output - 13

let result4 = 2 ** 3 + 5;
console.log(result4);


// (e)

// prediction - 9.2
// forgot bracket is given the first priority
/// actual output - 6

let result5 = (8 + 2) / 5 * 3;
console.log(result5);

// Problem 12 - Fix the Expression 

let result6 = (10 + 20) * 5 / 3;

// Problem 13 - Formula 

let finalResult = ((15 + 5) * 3 - 10) / 4;
console.log(finalResult);

//Part D - Assignment Operators

//Problem 14 BanK Account

let balance = 5000;
console.log(balance);

balance += 15000;
console.log(balance);

balance -= 8000;
console.log(balance);

balance += 5000;
console.log(balance);

balance -= 3000;
console.log(balance);

// Problem 15 - Compound Interest

//100% (your money) + 10% (interest)

//1.00 + 0.10 = 1.10

let amount = 10000;

amount *= 1.10;
console.log(`After Year 1: ${amount}`);


amount *= 1.10;
console.log(`After Year 2: ${amount}`);

amount *=1.10;
console.log(`After Year 3: ${amount}`);

//Part E - Increment and Decrement Operators 

// Problem 16 - Pre vs Post Increment

// Prediction - 10, 10, 10, 10
// Actual Output - x: 10 y:

// ++ always increases the variable's value by 1.
//It does not create a copy.
//It does not keep the original value safe.
//It modifies the variable itself.

let x = 10;
let y = x++;
console.log("x:", x, "y:", y);
console.log(y);
//x: 11 y: 10

// Prediction - a: 11 b: 11
// Actual Output - 

let f = 10;
let g = ++f;
console.log("f:", f, "g:", g);

//----------------------------------------------------------------------------------
//The results are different because in pre increment the value gets added first then print. 
// And in post increment the value prints first then gets added.

// Problem 17: Countdown Timer

// Start countdown from 10
// let countdown = 10;

// // Manually decrement and log (no loops allowed yet)
// console.log(countdown); // 10
// countdown--;

// console.log(countdown); // 9
// countdown--;

// console.log(countdown); // 8
// countdown--;

// console.log(countdown); // 7
// countdown--;

// console.log(countdown); // 6
// countdown--;

// console.log(countdown); // 5
// countdown--;

// console.log(countdown); // 4
// countdown--;

// console.log(countdown); // 3
// countdown--;

// console.log(countdown); // 2
// countdown--;

// console.log(countdown); // 1


// // Problem 18: The Tricky Problem

// let x = 10;
// let y = x++; 
// // x++ is post-increment → y gets old value, then x increases

// console.log("x:", x, "y:", y);
// // x = 11, y = 10

// let a = 10;
// let b = ++a;
// // ++a is pre-increment → a increases first, then assigned to b

// console.log("a:", a, "b:", b);
// // a = 11, b = 11


// // Problem 19: Understanding NaN

// // a)
// let result1 = 0 / 0;
// console.log(result1); // NaN

// // b)
// let result2 = "hello" * 5;
// console.log(result2); // NaN

// // c)
// let result3 = NaN + 10;
// console.log(result3); // NaN

// // d)
// let result4 = Math.sqrt(-1);
// console.log(result4); // NaN

// // e)
// console.log(typeof NaN); // "number"


// // Problem 20: Detecting NaN

// let value1 = 100;
// let value2 = "test" / 2;
// let value3 = 0 / 0;
// let value4 = "123";

// console.log(Number.isNaN(value1)); // false
// console.log(Number.isNaN(value2)); // true
// console.log(Number.isNaN(value3)); // true
// console.log(Number.isNaN(value4)); // false

// // Problem 21: Grade Calculator

// let math = 85;
// let science = 92;
// let english = 78;
// let history = 88;
// let computer = 95;

// // Calculate average
// let average = (math + science + english + history + computer) / 5;

// // Display result
// console.log("Your average grade is:", average);


// // Problem 22: Age Calculator

// let currentYear = 2024;
// let birthYear = 2003; // change to your birth year

// let age = currentYear - birthYear;

// console.log("In", currentYear, "you are", age, "years old");


// // Problem 23: Swap Values Without Third Variable

// let a = 10;
// let b = 20;

// // Swapping using arithmetic
// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b; // a = 20

// console.log("a:", a, "b:", b);


// // Problem 24: Digit Sum Calculator

// let number = 456;

// // Get first digit
// let firstDigit = Math.floor(number / 100);

// // Remove first digit and get second digit
// let remaining = number % 100;
// let secondDigit = Math.floor(remaining / 10);

// // Get last digit
// let lastDigit = remaining % 10;

// // Calculate sum
// let digitSum = firstDigit + secondDigit + lastDigit;

// console.log("Sum of digits:", digitSum); // 15


























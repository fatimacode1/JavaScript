//Day - 1 JS Basics

//1. REPL Pattern

let num1 = 1 + 2;
console.log(num1);

let num2 = 5 * 10;
console.log(num2);

let js = "Hello" + " " + "World";
console.log(js);


//2. Declaring and Assigning Variables

//Creating a variable and assigning a value

let age = 23;
let fullName = "Tony Stark";
let isStudent = true;

//You can also declare without assigning (value will be undefined)

let score;
console.log(score); //Output: undefined

// Later assign a value

score = 95;
console.log(score); //Output: 95


//3. Assignment Operator

let x = 10;
console.log(x);

//4. Data Types 

//1. Number 

let age1 = 67; //Integer
console.log(age1);

let price = 67.99; //Decimal (floating-point)
console.log(price);

let temperature = -5; //Negative number
console.log(temperature);

let distance = 1.5e6; //Scientific notation (1,500,000)
console.log(distance);

//Important note: JavaScript doesn't distinguish between integers and floats, they're all just "NUMBERS".

//2. String 

let fullName1 = "John Doe"; //Double quotes
let greeting = 'Hello World'; //Single quotes
let message = `Welcome, ${fullName1}`; //Template literals (backticks)

//Template literals allow embedded expressions 

let age2 = 20;
let info = `I am ${age2} years old`; 
console.log(info); //Output: I am 20 years old

//3. Boolean 

//true or false 

let isStudent1 = true;
let isLoggedIn = false;
let hasPermission = true;

//Often used in conditions 

if (isStudent) {
    console.log("Student discount applied!");    
}


//4. Undefined 

let score1;
console.log(score1); //Output: undefined
console.log(typeof score1);  //Output: undefined

//This is different from not declaring a variable at all
// console.log(randomVar); //ReferenceError: randomVar is not defined

//5. Null

let data  = null; //Explicitly saying "this has no value right now"
console.log(data); //Output: null

//Common use case
let user = null //No user logged in yet
console.log(user); //Output: null

//Later when user logs in 
user = { name: "Alice", id: 101};
console.log(user);

//6. BigInt

let bigNumber = 93875743838383838392n; //Note the 'n' at the end
console.log(bigNumber);

let huge = 1293939394933330300330n;

//7. Symbol

let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); //Output: false
//Each symbol is unique


// -> Checking Data Types
console.log(typeof 25); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object (this is a JS quirk!)
console.log(typeof 1234n); //bigint



//5. Arithmetic Operations 

//1. Addition 

let sum = 5 + 2; //7
console.log(sum);

let result = 10 + 20 + 30 + 40; //100
console.log(result);

//2. Subtraction 

let difference = 10 - 3; //7
console.log(difference);

let result1 = 84 - 49; //35
console.log(result1);

//3. Multiplication 

let product = 4 * 5; //20
console.log(product);

let area = 10 * 40; //400
console.log(area);

//-----------------------------------------------------
//4. Division 

// let quotient = 20/4; //5
// console.log(quotient);

// let half = 10/2; //5
// console.log(half);

// let decimal = 7/2; //3.5
// console.log(decimal);

// // 5. Modulo 

// // Modulo (%)
// let remainder = 12 % 5; // 2
// let check = 10 % 3; // 1
// let even = 8 % 2; // 0

// let number = 7;
// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// // Exponentiation (**)
// let squared = 5 ** 2; // 25
// let cubed = 2 ** 3; // 8
// let power = 10 ** 3; // 1000

// // Operator Precedence
// let result1 = 5 + 3 * 2; // 11
// let result2 = (5 + 3) * 2; // 16
// let result3 = (5 + 2) / 7 + 1 * 2; // 3
// let result4 = 2 + 3 ** 2; // 11
// let result5 = 10 / 2 * 3; // 15

// // String Concatenation
// let firstName = "Tony";
// let lastName = "Stark";
// let fullName = firstName + " " + lastName;

// let age = 23;
// let message = "I am " + age + " years old";

// // NaN (Not-a-Number)
// let nan1 = 0 / 0;
// let nan2 = Math.sqrt(-1);
// let nan3 = Number("abc");
// let nan4 = parseInt("hello");

// let x;
// let nan5 = x * 5;

// console.log(typeof NaN); // "number"
// console.log(NaN === NaN); // false
// console.log(isNaN(NaN)); // true
// console.log(Number.isNaN(NaN)); // true

// let value = 0 / 0;
// console.log(isNaN(value));
// console.log(Number.isNaN(value));

// // Assignment Operators
// let score = 100;
// score += 50;
// score -= 20;
// score *= 2;
// score /= 4;

// let num = 17;
// num %= 5;

// let base = 2;
// base **= 3;

// // Increment / Decrement
// let count = 5;
// let a = count++;
// let b = ++count;

// let y = 10;
// let c = y--;
// let d = --y;

// // Loop Examples
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let countdown = 10;
// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log("Blast off!");

// // Quick Reference Card
// let ageRef = 23;
// const PI = 3.14;

// typeof 42; // "number"
// typeof "hello"; // "string"
// typeof true; // "boolean"
// typeof undefined; // "undefined"
// typeof null; // "object"

// 10 + 5; // 15
// 10 - 5; // 5
// 10 * 5; // 50
// 10 / 5; // 2
// 10 % 3; // 1
// 2 ** 3; // 8

// let ref = 10;
// ref += 5;
// ref -= 5;
// ref *= 5;
// ref /= 5;

// ref++;
// ++ref;
// ref--;
// --ref;

// isNaN(value);
// Number.isNaN(value);















//Day 1: JS Basics

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


//3. Assignment Operator (=)

let x = 10;
console.log(x); //Assigns the value 10 to variable x

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
console.log(user); //Output: { name: 'Alice', id: 101 }

//6. BigInt
let bigNumber = 93875743838383838392n; //Note the 'n' at the end
console.log(bigNumber);

let huge = 1293939394933330300330n;
console.log(huge); //Output:

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


//4. Division 
let quotient = 20/4;
console.log(quotient); //5

let half = 10/2;
console.log(half); //5

let decimal = 7/2;
console.log(decimal); //3.5

//5. Modulo 
let remainder = 12 % 5; 
console.log(remainder); //2

let check = 10 % 3;
console.log(check); //1

let even = 8 % 2;
console.log(even); //0 (no remainder, 8 is even)

//Practical use: Check if a number is even or odd

let number = 7;
if (number % 2 === 0) {
    console.log("Even");
    
} else {
    console.log("Odd"); //Odd (This will execute)
    
}

//6. Exponentiation 
let squared = 5 ** 2;
console.log(squared); //25

let cubed = 2 ** 3;
console.log(cubed); //8

let power = 10 ** 3;
console.log(power); //1000 (10 to the power of 3)

//Combining Operations
let result2 = 5 + 3 * 2; // 11 
console.log(result2);
//Multiplication happend first (operator precedence)

let complex = (5 + 3) * 2; //16
console.log(complex);
//Parentheses force addition first


//6. String concatenation with +

let firstName2 = "Tony";
let lastName2 = "Stark";
let fullName2 = firstName2 + " " + lastName2; //Tony Stark
console.log(fullName2);

let age3 = 20; 
let message1 = "I am " + age + " years old";
console.log(message1); // I am 23 years old 


//7. NaN (Not-a-Number)

//Dividing zero by zero 
let result6 = 0/0;
console.log(result6); //NaN

//Ivalid mathematical operations 
let result7 = Math.sqrt(-1);
console.log(result7); //NaN (Square roof of negative)


//Converting non-numeric strings to numbers 
let result8 = Number("abcd"); //NaN
console.log(result8);

let result9 = parseInt("hello");
console.log(result9); //NaN

//Operations with undefined 
let y;
let result10 = y * 5;
console.log(result10); //NaN

//-> Important Characteristics

//1. NaN Propagates 
let z = NaN;
console.log("z =", z + 1); //Output: NaN
console.log(z * 5); //Output: NaN
console.log(z / 2); //Output: NaN
console.log(z - 10); //Output: NaN

//2. Type of NaN is "number"
console.log(typeof NaN); //number
//This is a quirk of JS!

//3. NaN is not equal to itself
console.log(NaN === NaN); //false
console.log(NaN == NaN); //false


//To check if a value is NaN, use:
console.log(isNaN(NaN)); //Output: true
console.log(Number.isNaN(NaN)); //Output: true (more reliable)

//isNaN("hello") returns true because isNaN() converts "hello" to a number, which results in NaN.

//Due to this confusing behavior, Number.isNaN() was introduced to strictly check only NaN without type conversion.


//Checking for NaN
let value = 0/0;

//Method 1: isNaN() - converts value to number first
console.log(isNaN(value)); //true

//Method 2: Number.isNaN() - doesn't convert (recommended)
console.log(Number.isNaN(value)); //true

//Why Number.isNaN() is better:
console.log(isNaN("hello")); //true (Converts "hello" to number first)
console.log(Number.isNaN("hello")); //false (doesn't convert)

//8. OPERATOR PRECEDENCE

// ORDER OF PRECDENCE (HIGHEST TO LOWEST)
// ()
// **
// *, /, %
// +, -

//Example 1: Multiplication before addition 
let res = 5 + 3 * 2;
console.log(res); //11

//Example 2: Using parentheses to change order
let res1 = (5 + 3) * 2;
console.log(res1); //16

//Example 3: Complex expression
let res2 = (5 + 2) / 7 + 1 * 2;
console.log(res2); //3

//Example 4: Exponentiation has high precedence
let res3 = 2 + 3 ** 2;
console.log(res3); //11

//Example 5: Same precedence, left to right
let res4 = 10/2 * 3;
console.log(res4); //15

//-> Pro Tip 

//Less Clear
// let total = price + price * taxRate;
// console.log(total); 
//taxRate is not defined 

//More Clear
// let total1 = price + (price * taxRate);


//9. Assignment Operators

let o = 10; //Assigns 10 to x

//Compound Assignment Operators

//1. (+=)

let age4 = 20;
age4 += 5; // age = age + 5;
console.log(age4); //25


//Equivalent to:
let score2 = 100;
score2 = score2 + 50;
console.log(score2); //150
//vs.
// score += 50; //150 (Shorter)


//2. (-=)

let balance = 1000;
balance -= 200; //balance = balance - 200
console.log(balance); //800

//3. (*=)

let price1 = 50;
price1 *= 2; //price = price * 2
console.log(price1); //100

//4. (/=)

let total = 100;
total /= 4; //total = total / 4
console.log(total); //25

//5. (%=)

let number1 = 17;
number1 %= 5 //number1 = number1 % 5
console.log(number1); //2

//6. (**=)

let base = 2;
base **= 3; //base = base ** 3
console.log(base); //8

//When to use

//Accumulating a total 
let total1 = 0;
total1 += 100; //Add first item
total1 +=250; //Add second item
total1 += 75; //Add third item
console.log(total1); //425

//Doubling a value multiple times 
let value1 = 5;
value1 *= 2; //10
value1 *= 2; //20
value1 *= 2; //40
console.log(value1);

//10. Unary Operators

//1. Post-increment (variable++)
let count1 = 5;
let ress = count1++;

console.log(ress); //5 (uses old value)
console.log(count1); //6 (now incremented)

//2. Pre-increment (++variable)
let count4 = 5;
let result4 = ++count4;
console.log(result4); //6 (uses new value)
console.log("count4 =" ,count4); //6 (incremented)
////////////////
//(--variable)

let count2 = 5;
let resss = ++count2;

console.log(resss); //6 (uses new value)
console.log(count2); //6 (incremented)

//Comparison Example 

let f = 10;
let g = f++; //post-increment

console.log(g); //10 (old value)
console.log(f); //11 (incremented)

let h = 10;
let i = ++h; //pre-increment

console.log(i); //11 (new value)
console.log(h); //11 (incremented)

//Decrement Operator (--)

//(variable--)
let score3 = 10;
let res7 = score3--;

console.log(res7); //10 (old value)
console.log(score3); //9 (decremented)

//(--variable)

let score4 = 10;
let res8 = --score;

console.log(res8); //9 (new value)
console.log(score4); //9 (decremented)

//Practical Example: The Tricky Case 

let numW = 5;
let newNumW = numW++; //newNum = 5, num = 6
newNumW = ++numW; //num = 7, newNum = 7

console.log(numW); //7
console.log(newNumW); //7


//Common use cases 

//1. Loop Counters

// let j = 0; 
// while (j < 5) {
//     console.log(j);
//     i++; //Increment after each iteration
// }

//2. Counting Down

// let countdown = 10;
// while (countdown > 0) {
//     console.log(countdown);
//     countdown--; //Decrement
// }
// console.log("Blast off");


//3. Simple Incrementing 

let pageViews = 100;
pageViews++; //Now 101
console.log(pageViews);

//Pro Tips

//1. Avoid Confusion

//Bad confusing 
let m = 5;
let n = m++ + ++m; //Hard to read

//Good Clear
let p = 5;
p++;
p++;
let r = p + p;
console.log(r);

//2. Use standalone

//Preferred
let count3 = 10;
count3++;
console.log(count3);

//Avoid unless you have good reason

// let result = count++ + ++count;

/*
//VARIABLES

let agee = 23;
const PI = 3.14;

//DATA TYPES
typeof 42 //number
typeof "hello" //string 
typeof true //boolean
typeof undefined //undefined
typeof null //object (quirk)

//ARITHMETIC
10 + 5 //15
10 - 5 //5
10 * 5 //50
10 % 3 //1
2 ** 3 //8

//ASSIGNMENT
x += 5; //x = x + 5;
x -= 5; //x = x - 5;
x *= 5; //x = x * 5;
x /= 5; //x = x / 5;

//CHECKING FOR NaN
isNaN(value) //true if NaN
Number.isNaN(value) //better method
*/












 


















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















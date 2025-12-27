// ================= IDENTIFIERS =================
let userName = "Alice";
let _privateVar = 10;
let $price = 99.99;
const MAX_LIMIT = 100;

// ================= BOOLEANS =================
let isLoggedIn = true;
let isAdmin = false;
let age = 20;
let isAdult = age >= 18;

// ================= DYNAMIC TYPING =================
let value = 10;
value = "ten";
value = true;

// ================= STRINGS =================
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateString = `Hello ${userName}`;

let escapedString = "It's a beautiful day";
let multiLine = `Line 1
Line 2
Line 3`;

// ================= STRING PROPERTIES =================
let city = "London";
console.log(city.length);
console.log(city[0]);
console.log(city[city.length - 1]);

// ================= STRING METHODS =================
let text = "JavaScript";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0, 4));
console.log(text.replace("Java", "Type"));

// ================= STRING CONCATENATION =================
let firstName = "Fatima";
let lastName = "Ahmed";
let fullName = firstName + " " + lastName;

let score = 100;
let scoreMsg = "Your score is " + score;

// ================= += OPERATOR =================
let message = "Hello";
message += " ";
message += "World!";
console.log(message);

// ================= TEMPLATE LITERALS =================
let product = "Laptop";
let price = 999;
let bill = `The ${product} costs $${price}`;

// ================= NULL vs UNDEFINED =================
let a;
let b = null;

console.log(a);        // undefined
console.log(b);        // null
console.log(typeof a); // undefined
console.log(typeof b); // object

// ================= OUTPUT METHODS =================
console.log("Hello World");
console.warn("This is a warning");
console.error("This is an error");

// ================= COMPARISON OPERATORS =================
console.log(10 > 5);
console.log(5 < 10);
console.log(5 >= 5);
console.log(5 <= 5);
console.log(5 != 4);

// ================= LOOSE vs STRICT =================
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(0 == false); // true
console.log(0 === false);// false

// ================= STRING COMPARISON =================
console.log("apple" < "banana");
console.log("Zoo" < "apple");
console.log("10" < "2");

// ================= CASE-INSENSITIVE COMPARISON =================
let name1 = "Apple";
let name2 = "apple";
console.log(name1.toLowerCase() === name2.toLowerCase());

// ================= CONDITIONAL EXAMPLES =================
if (isAdult) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ================= CHARACTER CHECK =================
let char = 'A';
if (char >= 'A' && char <= 'Z') {
  console.log("Uppercase letter");
}

// ================= FINAL PRACTICE =================
let numberInput = "25";
let convertedNumber = Number(numberInput);
console.log(convertedNumber === 25);

// ================= END =================

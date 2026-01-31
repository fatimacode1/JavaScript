// // Valid examples

// let userName123
// let
// let
//  userName123; ;
// let _privateVariable
//  _privateVariable; ;
// let $specialValue
// let
// let
//  $specialValue; ;
// let total_AMOUNT
//  total_AMOUNT; ;



// Invalid
// let user name
//  user name; ;            
// let
// let total cost
//  total cost; ;          
//Error


//  Valid alternatives
// let userName
//  userName; ;              

// let user_name
//  user_name; ;            

// let totalCost
//  totalCost; ;            

let age;
let _private;
let $price; 

// Invalid
// let 123name; 
// let 9lives;

let userAge = 25;
let userage = 30;
let UserAge = 35;
let USERAGE = 40;
// These are FOUR DIFFERENT variables!
console.log(userAge); // 25
console.log(userage); // 30
console.log(UserAge); // 35
console.log(USERAGE); // 40


// // Invalid - using reserved words
// let let = 10;
// let if = 20; 

// // Valid alternatives
// let letVariable = 10; 
// let ifCondition = 20; 
// let functionName = 30; 
// let function = 30; 

// Invalid
// let user--name = "Alice"; 
// let user_name = "Alice"; 
// let userName = "Alice"; 

// Invalid
// let 1stPlace = "Gold"; 
// let 99balloons = 99;


// // Valid
// let firstPlace = "Gold"; 
// let place1st = "Gold"; 


// Invalid
// let my$variable = 10; 
// let my#variable = 10;
// // Remember: Only _ and $ are allowed as special characters
// let my_variable = 10; 
// let my$variable = 10;

// let userName = "Alice";
// let totalPrice = 99.99;
// let isLoggedIn = true;
// let calculateTotalCost = function() { };
// let getUserInfo = function() { };

// Variables
// let firstName = "John";
// let lastName = "Doe";
// let dateOfBirth = "1990-01-01";
// let emailAddress = "john@example.com";
// // Functions
// function calculateAge(birthYear) {
//  return 2024 -- birthYear;
// }
// function sendEmailNotification(email, message) {
//  // code here
// }


// let user_name = "Alice";
// let total_price = 99.99;
// let is_logged_in = true;
// let calculate_total = function() { };


// Classes and Constructors
// class UserAccount {
//  constructor(name) {
//  this.name = name;
//  }
// }
// class ShoppingCart {
//  // class code
// }
// // React Components
// function UserProfile() {
//  return <div>Profile</div>;
// }


// const MAX_LOGIN_ATTEMPTS = 3;
// const API_KEY = "abc123xyz";
// const PI = 3.14159;
// const DATABASE_URL = "mongodb://localhost:27017";


// let strName = "Alice"; // str = string
// let numAge = 25; // num = number
// let bIsActive = true; // b = boolean

// Bad - unclear names
// let x = 25;
// let y = "John";
// let z = true;
// // Good - descriptive names
// let userAge = 25;
// let firstName = "John";
// let isEmailVerified = true;
// // Bad - too short
// let fn = "Alice";
// let ln = "Smith";
// // Good - clear and readable
// let firstName = "Alice";
// let lastName = "Smith";
// // Bad - abbreviations
// let usrAddr = "123 Main St";
// let empSal = 50000;
// // Good - spelled out
// let userAddress = "123 Main St";
// let employeeSalary = 50000;

// let isLoggedIn = true;
// let isOver18 = false;
// let hasPermission = true;
// let isEmailVerified = false;

// let isStudent = true;
// if (isStudent) {
//  console.log("Student discount applied!");
// } else {
//  console.log("Regular price.");
// }

// let age = 20;
// let isAdult = age >= 18; // true
// console.log(isAdult); // true
// let score = 75;
// let isPassing = score >= 60; // true
// let isFailing = score < 60; // false
// let temperature = 30;
// let isHot = temperature > 25; // true
// let isCold = temperature < 10; // false

// // Toggle states
// let isMenuOpen = false;
// let isDarkMode = true;
// let isPlaying = false;
// // User states
// let isLoggedIn = true;
// let isAdmin = false;
// let isVerified = true;
// // Feature flags
// let isFeatureEnabled = true;
// let isBetaUser = false;
// // Validation
// let isEmailValid = true;
// let isPasswordStrong = false;
// let isFormComplete = true;

// false
// 0
// "" (empty string)
// null
// undefined
// NaN
// true
// 1 (or any non--zero number)
// "hello" (any non--empty string)
// [] (arrays)
// {} (objects)


// if (0) {
//  console.log("This won't run"); // 0 is falsy
// }
// if (1) {
//  console.log("This will run"); // 1 is truthy
// }
// if ("hello") {
//  console.log("This will run"); // non-empty string is truthy
// }

// let x = 5; // x is a number
// console.log(typeof x); // "number"
// x = "hello"; // Now x is a string - ALLOWED!
// console.log(typeof x); // "string"
// x = true; // Now x is a boolean - ALLOWED!
// console.log(typeof x); // "boolean"
// x = [1, 2, 3]; // Now x is an array - ALLOWED!
// console.log(typeof x); // "object"


// function addNumbers(a, b) {
//  return a + b;
// }
// console.log(addNumbers(5, 10)); // 15
// console.log(addNumbers("5", 10)); // "510" Unexpected string concatenation!
// console.log(addNumbers(5, "10")); //510

// let x: number = 5; // x must be a number
// console.log(x); // 5
// x = "hello"; // ERROR: Type 'string' is not assignable to type 'number'
// x = true; // ERROR: Type 'boolean' is not assignable to type 'number'
// // This will only accept numbers
// x = 10; 

// function addNumbers(a: number, b: number): number {
//  return a + b;
// }
// console.log(addNumbers(5, 10)); // 15 ✓
// console.log(addNumbers("5", 10)); // ERROR at compile time!
// console.log(addNumbers(5, "10")); 

// // JavaScript - Flexible but potentially problematic
// let userAge = 25;
// userAge = "twenty-five"; // Allowed but probably not intended
// userAge = null; // Allowed but might break calculations
// function calculateDiscount(age) {
//  return age * 0.1; // What if age is a string?
// }

// TypeScript - More rigid but safer
// let userAge: number = 25;
// userAge = "twenty-five"; //Compile error - caught immediately!
// userAge = null; //Compile error
// function calculateDiscount(age: number): number {
//  return age * 0.1; // Guaranteed age is a number
// }

// let firstName = 'Alice';
// let greeting = 'Hello, World!';
// let message = 'It\'s a beautiful day'; // Escape quote with 

// let firstName = "Alice";
// let greeting = "Hello, World!";
// let message = "She said, \"Hello!\"";


// let firstName = `Alice`;
// let greeting = `Hello, World!`;
// let message = `It's a "beautiful" day`; // No escaping needed!


// // Use double quotes on outside, single quotes inside
// let message1 = "It's a beautiful day"; //Works!
// let message2 = "He said, 'Hello there!'"; //Works!
// // Use single quotes on outside, double quotes inside
// let message3 = 'She said, "Good morning!"'; //Works!
// let message4 = 'The word "hello" is friendly'; //Works!

// // Escape single quote inside single quotes
// let message1 = 'It\'s a beautiful day'; //Works!
// // Escape double quote inside double quotes
// let message2 = "He said, \"Hello there!\""; //Works

// No escaping needed!
// let message1 = `It's a beautiful day`; //Works!
// let message2 = `She said, "Good morning!"`; //Works!
// let message3 = `Use 'any' "quotes" you want!`; //Works!

// let message = 'It's a day'; //ERROR!
// // JavaScript thinks the string ends at the second quote
// // It sees: 'It' followed by confusing text: s a day';

// let message = 'It's a day'; //ERROR!
// // JavaScript thinks the string ends at the second quote
// // It sees: 'It' followed by confusing text: s a day';



// let message1 = "It's a day"; //Different outer quotes
// let message2 = 'It\'s a day'; //Escaped quote
// let message3 = `It's a day`;


// let name = "Alice";
// console.log(name.length); // 5
// let message = "Hello, World!";
// console.log(message.length); // 13
// let empty = "";
// console.log(empty.length); // 0



// let text = "Hello, World!";
// // Convert to uppercase
// console.log(text.toUpperCase()); // "HELLO, WORLD!"
// // Convert to lowercase
// console.log(text.toLowerCase()); // "hello, world!"
// // Extract part of string
// console.log(text.slice(0, 5)); // "Hello"
// // Replace text
// console.log(text.replace("World", "JavaScript")); // "Hello, JavaScript!"

// let newLine = "First line\nSecond line";
// console.log(newLine);
// // Output:
// // First line
// // Second line
// let tab = "Name:\tAlice";
// console.log(tab);
// // Output: Name: Alice
// let backslash = "This is a backslash: \\";
// console.log(backslash);
// // Output: This is a backslash: \
// let quote = "She said, \"Hi!\"";
// console.log(quote);
// // Output: She said, "Hi!"

// let city = "London";
// console.log(city[0]); // "L" - first character
// console.log(city[1]); // "o" - second character
// console.log(city[2]); // "n" - third character
// console.log(city[3]); // "d" - fourth character
// console.log(city[4]); // "o" - fifth character
// console.log(city[5]); // "n" - sixth (last) character

// let word = "JavaScript";
// // First character
// let first = word[0];
// console.log(first); // "J"
// // Last character using length
// let last = word[word.length -- 1];
// console.log(last); // "t"
// // Why length - 1?
// // Because length is 10, but last index is 9 (0-based indexing)
// console.log(word.length); // 10
// console.log(word[9]); // "t"
// console.log(word[10]); // undefined (out of bounds)



// let name = "Alice"; // length is 5, valid indices: 0-4
// console.log(name[0]); // "A"
// console.log(name[4]); // "e"
// console.log(name[5]); // undefined (no character at index 5)
// console.log(name[10]); // undefined
// console.log(name[--1]); // undefined (negative indices don't work like Python)

// let email = "alice@example.com";
// if (email[0] === '@') {
//  console.log("Email cannot start with @");
// } else {
//  console.log("Email format might be valid");
// }

// let firstName = "Alice";
// let lastName = "Smith";
// let initials = firstName[0] + lastName[0];
// console.log(initials); // "AS"
// // With dots
// let formalInitials = firstName[0] + "." + lastName[0] + ".";
// console.log(formalInitials); // "A.S."


// let password = "Pass123";
// let firstChar = password[0];
// let lastChar = password[password.length -- 1];
// console.log("First character:", firstChar); // "P"
// console.log("Last character:", lastChar); // "3"
// if (lastChar >= '0' && lastChar <= '9') {
//  console.log("Password ends with a number");
// }

// let word = "Hello";
// word[0] = "J"; // This does NOT work!
// console.log(word); // Still "Hello"
// // To "change" a string, create a new one
// let newWord = "J" + word.slice(1);
// console.log(newWord); // "Jello"

// let text = "Hello";
// console.log(text.length); // 5
// console.log(text[text.length]); // undefined (index 5 doesn't exist)
// console.log(text[text.length -- 1]); // "o" (correct last character)

// let text = "Hello World";
// console.log(text.length); // 11 (space counts!)
// console.log(text[5]); // " " (space character)

// Joining two strings
// let firstName = "Alice";
// let lastName = "Smith";
// let fullName = firstName + lastName;
// console.log(fullName); // "AliceSmith"
// // Adding space
// let fullNameWithSpace = firstName + " " + lastName;
// console.log(fullNameWithSpace); // "Alice Smith"

// let greeting = "Hello";
// let name = "World";
// let punctuation = "!";
// let message = greeting + ", " + name + punctuation;
// console.log(message); // "Hello, World!"


// // Number + String = String
// let score = 100;
// let message1 = "Your score is: " + score;
// console.log(message1); // "Your score is: 100"
// console.log(typeof message1); // "string"
// // String + Number = String
// let message2 = "Player " + 1;
// console.log(message2); // "Player 1"
// // Multiple numbers and strings
// let age = 25;
// let message3 = "I am " + age + " years old";
// console.log(message3); // "I am 25 years old"


// let userName = "Bob";
// let points = 150;
// let welcomeMsg = "Welcome back, " + userName + "!";
// let scoreMsg = "You have " + points + " points.";
// console.log(welcomeMsg); // "Welcome back, Bob!"
// console.log(scoreMsg); // "You have 150 points."
// let domain = "example.com";
// let protocol = "https://";
// let page = "/about";
// let fullURL = protocol + domain + page;
// console.log(fullURL); // "https://example.com/about"


// let fileName = "report";
// let fileType = ".pdf";
// let year = 2024;
// let fullFileName = fileName + "_" + year + fileType;
// console.log(fullFileName); // "report_2024.pdf"


// let message = "Hello";
// message += " "; // message = message + " "
// message += "World"; // message = message + "World"
// message += "!"; // message = message + "!"
// console.log(message); // "Hello World!"

// let htmlContent = "<div>";
// htmlContent += "<h1>Title</h1>";
// htmlContent += "<p>Paragraph</p>";
// htmlContent += "</div>";
// console.log(htmlContent);
// // Output: <div><h1>Title</h1><p>Paragraph</p></div>


// // All numbers - addition
// console.log(10 + 20); // 30 (number addition)
// // String first - concatenation
// console.log("10" + 20); // "1020" (string concatenation)
// // Number first, then string - concatenation
// console.log(10 + "20"); // "1020" (string concatenation)
// // Mixed operations
// console.log(10 + 20 + "30"); // "3030" (10+20=30, then "30"+"30")
// console.log("10" + 20 + 30); // "102030" (all concatenation)
// // Using parentheses
// console.log("Result: " + (10 + 20)); // "Result: 30" (forces addition first)


// // Concatenation (hard to read)
// let name = "Alice";
// let age = 25;
// let city = "New York";
// let message = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
// // Template Literal (easier to read) - We'll cover this next!
// let betterMessage = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;


// let score;
// console.log(score); // undefined
// console.log(typeof score); // "undefined"


// javascript
// function greet() {
//  console.log("Hello!");
//  // No return statement
// }
// let result = greet();
// console.log(result); // undefined



// let user = { name: "Alice" };
// console.log(user.age); // undefined (property doesn't exist)


// let colors = ["red", "blue"];
// console.log(colors[5]); // undefined


// function greet(name) {
//  console.log(name);
// }
// greet(); // undefined (no argument passed)


// let userInput; // Declared but not assigned
// if (userInput === undefined) {
//  console.log("Please provide input");
// } else {
//  console.log("Input received:", userInput);
// }


// let currentUser = null; // No user logged in
// console.log(currentUser); // null
// console.log(typeof currentUser); // "object" (this is a JavaScript quirk!)


// let winner = "Alice";
// console.log(winner); // "Alice"
// // Game resets
// winner = null;
// console.log(winner); // null (intentionally cleared)


// let userData = {
//  name: "Bob",
//  email: "bob@example.com",
//  phone: null // User hasn't provided phone number
// };


// // Undefined - forgot to assign
// let firstName;
// console.log(firstName); // undefined
// console.log(typeof firstName); // "undefined"
// // Null - intentionally empty
// let middleName = null; // Person has no middle name
// console.log(middleName); // null
// console.log(typeof middleName); // "object" (historical bug in JavaScript)


// let value1; // undefined
// let value2 = null; // null
// // Check for undefined
// if (value1 === undefined) {
//  console.log("value1 is undefined");
// }
// // Check for null
// if (value2 === null) {
//  console.log("value2 is null");
// }
// // Check for either (common pattern)
// if (value1 == null) { // Note: using == (loose equality)
//  console.log("value1 is null or undefined");
// }
// // This works because: undefined == null is true
// console.log(typeof undefined); // "undefined" ✓ Makes sense
// console.log(typeof null); // "object"  Historical bug!
// // To properly check for null, use strict equality:
// let value = null;
// if (value === null) {
//  console.log("It's null");
// }
// // Don't rely on typeof for null
// if (typeof value === "object") {
//  // This could be null OR an actual object!
//  console.log("Could be null or an object");
// }
// let loggedInUser = null; // No one logged in initially
// function login(username) {
//  loggedInUser = username;
// }
// function logout() {
//  loggedInUser = null; // Explicitly clear the user
// }
// login("Alice");
// console.log(loggedInUser); // "Alice"
// logout();
// console.log(loggedInUser); // null


// let formData = {
//  firstName: "John",
//  lastName: "Doe",
//  middleName: null, // Optional field - intentionally null
//  nickname: undefined // Not provided at all
// };

// let product = {
//  id: 101,
//  name: "Laptop",
//  discount: null, // No discount currently
//  rating: undefined // No ratings yet
// };

// let selectedItem = null; // User hasn't selected anything
// if (value == null) { // true for both null AND undefined
//  console.log("No value");
// }

// console.log("Hello, World!");


// console.log("Name:", "Alice");
// console.log("Age:", 25);
// console.log("City:", "New York");
// // Output:
// // Name: Alice
// // Age: 25
// // City: New York


// let name = "Bob";
// let age = 30;
// let isStudent = false;
// console.log(name); // Bob
// console.log(age); // 30
// console.log(isStudent);// false


// let product = "Laptop";
// let price = 999;
// console.log("Product:", product);
// console.log("Price:", price);
// // Or combine in one log
// console.log("Product:", product, "- Price:", price);
// // Output: Product: Laptop - Price: 999

// console.log("Sum:", 10 + 20); // Sum: 30
// console.log("Result:", 50 / 2); // Result: 25
// console.log("5 * 5 =", 5 * 5); // 5 * 5 = 25

// let x = 10;
// console.log("Before:", x); // Before: 10
// x = x + 5;
// console.log("After:", x); // After: 15
// x *= 2;
// console.log("Final:", x); // Final: 30

// // Warning message (yellow in console)
// console.warn("This is a warning!");
// // Error message (red in console)
// console.error("This is an error!");
// // Info message
// console.info("This is information");
// // Clear the console
// console.clear();

// // Regular string
// let message1 = "Hello, World!";
// // Template literal
// let message2 = `Hello, World!`;
// // Both produce the same output
// console.log(message1); // Hello, World!
// console.log(message2); // Hello, World

// let name = "Alice";
// let age = 25;
// // Old way (concatenation)
// let message1 = "My name is " + name + " and I am " + age + " years old.";
// // New way (template literal)
// let message2 = `My name is ${name} and I am ${age} years old.`;
// console.log(message1); // My name is Alice and I am 25 years old.
// console.log(message2); // My name is Alice and I am 25 year

// // Concatenation (messy)
// let product = "Laptop";
// let price = 999;
// let message = "The " + product + " costs $" + price + " dollars.";
// // Template literal (clean)
// let betterMessage = `The ${product} costs $${price} dollars.

// // Regular strings (need escape characters)
// let oldWay = "Line 1\nLine 2\nLine 3";
// // Template literals (natural multi-line)
// let newWay = `Line 1
// Line 2
// Line 3`;
// console.log(newWay);
// // Output:
// // Line 1
// // Line 2
// // Line 3

// let a = 10;
// let b = 20;
// console.log(`Sum: ${a + b}`); // Sum: 30
// console.log(`Product: ${a * b}`); // Product: 200
// console.log(`${a} + ${b} = ${a + b}`); // 10 + 20 = 30

// let userName = "Bob";
// let hour = 14;
// let greeting = `Good ${hour < 12 ? 'morning' : 'afternoon'}, ${userName}!`;
// console.log(greeting); // Good afternoon, Bob!

// let item = "Apples";
// let quantity = 5;
// let price = 2.5;
// let total = quantity * price;
// let receipt = `
// Item: ${item}
// Quantity: ${quantity}
// Price per unit: $${price}
// Total: $${total}
// `;
// console.log(receipt);
// // Output:
// // Item: Apples
// // Quantity: 5
// // Price per unit: $2.5
// // Total: $12.5

// let title = "Welcome";
// let content = "Hello, World!";
// let html = `
// <div class="card">
//  <h1>${title}</h1>
//  <p>${content}</p>
// </div>
// `;
// console.log(html);


// let playerName = "Alice";
// let score = 1500;
// let level = 5;
// let statusMessage = `Player ${playerName} is on level ${level} with ${score} points!`;
// console.log(statusMessage);
// // Output: Player Alice is on level 5 with 1500 points!

// function getFullName(first, last) {
//  return `${first} ${last}`;
// }
// let firstName = "John";
// let lastName = "Doe";
// let age = 30;
// let message = `${getFullName(firstName, lastName)} is ${age} years old.`;
// console.log(message); // John Doe is 30 years old.

// let temperature = 30;
// let weather = `It's ${temperature > 25 ? 'hot' : 'cool'} today!`;
// console.log(weather); // It's hot today!
// let age = 20;
// let status = `You are ${age >= 18 ? 'an adult' : 'a minor'}.`;
// console.log(status); // You are an adult.

// let name = "Alice";
// let age = 25;
// let city = "New York";
// // Concatenation (hard to read and write)
// let msg1 = "Hi, I'm " + name + ". I'm " + age + " years old and I live in " + city + ".";
// // Template Literal (easy to read and write)
// let msg2 = `Hi, I'm ${name}. I'm ${age} years old and I live in ${city}.`;
// console.log(msg1); // Hi, I'm Alice. I'm 25 years old and I live in New York.
// console.log(msg2); // Hi, I'm Alice. I'm 25 years old and I liv

// console.log(10 > 5); // true
// console.log(5 > 10); // false
// console.log(5 > 5); // false (not greater, just equal)
// let age = 20;
// console.log(age > 18); // true


// console.log(5 < 10); // true
// console.log(10 < 5); // false
// console.log(5 < 5); // false
// let score = 45;
// console.log(score < 50); // tru

// console.log(10 >= 5); // true (10 is greater)
// console.log(5 >= 10); // false
// console.log(5 >= 5); // true (equal counts!)
// let age = 18;
// console.log(age >= 18); // true (can vote)


// console.log(5 <= 10); // true
// console.log(10 <= 5); // false
// console.log(5 <= 5); // true
// let temperature = 25;
// console.log(temperature <= 30); // true

// console.log(5 != 4); // true
// console.log(5 != 5); // false
// console.log(5 != "5"); // false (converts string to number)
// let userInput = 10;
// console.log(userInput != 0); // true

// console.log(5 == 5); // true
// console.log(5 == "5"); // true (string converted to number)
// console.log(1 == true); // true (boolean converted to number)
// console.log(0 == false); // true
// let x = 10;
// let y = "10";
// console.log(x == y); // true (type conversion happens)

// let age = 17;
// if (age >= 18) {
//  console.log("You can vote");
// } else {
//  console.log("You cannot vote yet");
// }


// let temperature = 30;
// if (temperature > 25) {
//  console.log("It's hot outside");
// } else {
//  console.log("It's cool outside");
// }


// let password = "abc123";
// let minLength = 8;
// if (password.length >= minLength) {
//  console.log("Password is strong enough");
// } else {
//  console.log("Password is too short");
// }
// // Output: Password is too short

// let score = 85;
// if (score >= 90) {
//  console.log("Grade: A");
// } else if (score >= 80) {
//  console.log("Grade: B");
// } else if (score >= 70) {
//  console.log("Grade: C");
// } else {
//  console.log("Grade: F");
// }
// // Output: Grade: B

// // Same types - straightforward comparison
// console.log(5 == 5); // true
// console.log("hi" == "hi"); // true
// // Different types - converts before comparing
// console.log(5 == "5"); // true (string "5" converted to number 5)
// console.log(1 == true); // true (true converted to 1)
// console.log(0 == false); // true (false converted to 0)
// console.log("" == false); // true (both are "falsy"

// console.log(10 == "10"); // true (string to number)
// console.log(0 == ""); // true (empty string to 0)
// console.log(0 == "0"); // true
// // Boolean vs Number
// console.log(true == 1); // true
// console.log(false == 0); // true
// console.log(true == 2); // false (true is 1, not 2)
// // Special cases
// console.log(null == undefined); // true (special rule)
// console.log(null == 0); // false
// console.log(undefined == 0); // false

// onsole.log("" == 0); // true 
// console.log(" " == 0); // true 
// console.log("\n" == 0); // true 
// // Counter-intuitive
// console.log(false == "false"); // false 
// console.log(false == "0"); // true 

// // Same type and value - true
// console.log(5 === 5); // true
// console.log("hi" === "hi"); // true
// console.log(true === true); // true
// // Different types - always false
// console.log(5 === "5"); // false (number vs string)
// console.log(1 === true); // false (number vs boolean)
// console.log(0 === false); // false (number vs boolean)
// console.log("" === false); // false (string vs boolean)


// // Number comparisons
// console.log(10 === 10); // true 
// console.log(10 === "10"); // false  (different types)
// // String comparisons
// console.log("hello" === "hello"); // true 
// console.log("hello" === "Hello"); // false  (case-sensitive)
// // Boolean comparisons
// console.log(true === true); // true 
// console.log(true === 1); // false  (different types)
// console.log(false === 0); // false  (different types)
// // Special values
// console.log(null === undefined); // false (different types)
// console.log(null === null); // true 
// console.log(undefined === undefined); // true

// console.log(5 != 4); // true
// console.log(5 != "5"); // false (converts types)
// console.log(1 != true); // false (converts types)

// let userInput = "10"; // From a form field (always a string)
// // Loose equality - might hide bugs
// if (userInput == 10) {
//  console.log("Input is 10"); // This runs! (type conversion)
// }
// // Strict equality - more reliable
// if (userInput === 10) {
//  console.log("Input is 10"); // This does NOT run
// }
// // Proper way
// let numericInput = Number(userInput);
// if (numericInput === 10) {
//  console.log("Input is 10"); // Correct!
// }


// let isActive = true;
// // Loose equality - unreliable
// if (isActive == 1) {
//  console.log("Active"); // This runs (true converted to 1)
// }
// // Strict equality - clear intent
// if (isActive === true) {
//  console.log("Active"); // Better!
// }
// // Even better - direct boolean check
// if (isActive) {
//  console.log("Active"); // Best!
// }


// let apiResponse = {
//  status: "200", // String from API
//  success: true
// };
// // Loose comparison
// if (apiResponse.status == 200) {
//  console.log("Success"); // Works but not ideal
// }
// // Strict comparison - catches type mismatches
// if (apiResponse.status === 200) {
//  console.log("Success"); // Doesn't run - reveals the bug!
// }
// // Fix: Convert to number first
// if (Number(apiResponse.status) === 200) {
//  console.log("Success"); // Correct approach
// }


// if (age === 18) { }
// if (name !== "") { }
// if (score === 100) { }
// // BAD - Unpredictable due to type coercion
// if (age == 18) { }
// if (name != "") { }
// if (score == "100") { }

// let value = null;
// // To check if value is either null or undefined
// if (value == null) { // true for both null and undefined
//  console.log("No value");
// }
// // Equivalent strict equality (more verbose)
// if (value === null || value === undefined) {
//  console.log("No value");
// }

// // Single character comparisons
// console.log('a' > 'A'); // true (97 > 65)
// console.log('b' < 'c'); // true (98 < 99)
// console.log('A' < 'a'); // true (65 < 97)
// // String comparison
// console.log("apple" < "banana"); // true (a < b)
// console.log("cat" > "bat"); // true (c > b)

// // Compares first different character
// console.log("apple" < "application"); // true
// // Compares: a=a, p=p, p=p, l=l, e < i, so "apple" < "application"
// console.log("hello" > "help"); // false
// // Compares: h=h, e=e, l=l, l < p, so "hello" < "help"
// console.log("cat" < "catalog"); // true
// // Compares: c=c, a=a, t=t, then "cat" ends (shorter < longer

// // Uppercase < Lowercase
// console.log('A' < 'a'); // true (65 < 97)
// console.log('Z' < 'a'); // true (90 < 97)
// // Comparisons with mixed case
// console.log("Apple" < "apple"); // true (A < a)
// console.log("HELLO" < "hello"); // true (H < h)
// // This can be counter-intuitive!
// console.log("Zoo" < "apple"); // true (Z < a)

// // String comparison (character by character)
// console.log("10" < "2"); // true 
// // Why? Compare first character: "1" < "2" (49 < 50)
// console.log("100" < "20"); // true 
// // Why? Compare first character: "1" < "2"
// // Actual number comparison
// console.log(10 < 2); // false 
// console.log(100 < 20); // false 

// let str1 = "10";
// let str2 = "2";
// // Convert to numbers first
// console.log(Number(str1) < Number(str2)); 
// // Or use parseInt/parseFloat
// console.log(parseInt(str1) < parseInt(str2));

// let names = ["Charlie", "Alice", "Bob"];
// // This won't work as expected with uppercase/lowercase mix
// let name1 = "alice";
// let name2 = "Bob";
// console.log(name1 < name2); // false (a > B in ASCII)
// // Solution: Convert to same case before comparing
// console.log(name1.toLowerCase() < name2.toLowerCase()); // true ✓
// console.log(name1.toUpperCase() < name2.toUpperCase());

// let password = "Abc123";
// // Check if password starts with uppercase
// if (password[0] >= 'A' && password[0] <= 'Z') {
//  console.log("Starts with uppercase");
// }
// // Check if password contains lowercase
// let hasLowercase = false;
// for (let char of password) {
//  if (char >= 'a' && char <= 'z') {
//  hasLowercase = true;
//  break;
//  }
// }
// console.log("Has lowercase:", hasLowercase); // true

// let char = 'A';
// // Check if uppercase letter
// if (char >= 'A' && char <= 'Z') {
//  console.log("Uppercase letter");
// }
// // Check if lowercase letter
// if (char >= 'a' && char <= 'z') {
//  console.log("Lowercase letter");
// }
// // Check if digit
// if (char >= '0' && char <= '9') {
//  console.log("Digit");
// }

// console.log('9' < 'A'); // true (57 < 65)
// console.log('Z' < 'a'); // true (90 < 97)
// console.log('0' < 'a'); // true (48 < 97)

// let str1 = "Apple";
// let str2 = "apple";
// // Case-sensitive (different)
// console.log(str1 === str2); // false
// // Case-insensitive (convert to same case)
// console.log(str1.toLowerCase() === str2.toLowerCase()); // true
// console.log(str1.toUpperCase() === str2.toUpperCase()); // true
// // Case-insensitive comparison function
// function equalIgnoreCase(str1, str2) {
//  return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(equalIgnoreCase("Hello", "HELLO")); // true
// console.log(equalIgnoreCase("World", "WORLD")); // true

// console.log("Zoo" < "apple"); // true (but Z is "after" a alphabetically!)
// console.log("Zoo".toLowerCase() < "apple".toLowerCase()); // false
// console.log("10" > "9"); 
// console.log(Number("10") > Number("9")); // true

// let 1stPlace; 
//  let firstPlace;

// let userName; 
//  let userName;

// let name = Alice; 
//  let name = "Alice"; 

// 5 == "5" 
//  5 === "5" 

// "Apple" === "apple" 
//  "Apple".toLowerCase() === "apple".toLowerCase() 

// "10" < "2" 
//  10 < 2 

// Const MAX_USERS = 100;
//  const API_URL = "https://api.example.com";

//  let msg = "Hello " + name + ", you are " + age + " years old.";
//  let msg = `Hello ${name}, you are ${age} years old.`;

// if (value === 10) { } 
//  if (value == 10) { } 

// let userInput = "25";
// let age = Number(userInput); 

// let word = "JavaScript";

// console.log(10 > 5);
// console.log(5 === "5");
// console.log('a' > 'A');
// console.log("10" < "2");

// // Valid Identifiers
// let userName; 
// let user_name; 
// let $price; 
// let _private;
// // Strings
// let str1 = "Hello"; 
// let str2 = 'Hello'; 
// let str3 = `Hello ${name}`; 
// let city = "London";
// city[0] 
// city[5] 
// // Concatenation
// "Hello" + " " + "World" /
// // Template Literals
// `My name is ${name} and I'm ${age} years old.`
// // Comparison Operators
// 10 > 5 
// 5 < 10 
// 5 >= 5 
// 5 <= 5 
// 5 != 4 
// 5 == "5" 
// 5 === "5" 
// // String Comparison
// 'a' > 'A' 
// 'apple' < 'banana' 
// "10" < "2" 
// // Null vs Undefined
// let x; 
// let y = null;
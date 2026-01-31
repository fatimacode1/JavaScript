//1. if statement

// if (condition) {
// //code executes if the condition is true
//}

//Example 1: Driver's License Check

let driverAge = 20;

if (driverAge >= 18) {
    console.log("Eligible for a license.");
    
}

//Output : Eligible for a license.

//Example 2 : Temperature Check

// let temperature = 35;

// if (temperature > 30) {
//     console.log("It's hot outside");
    
// }

// //Output: It's hot outside

// //Example 3: Password Validation

// let passowrd = "secure123";

// if (passowrd.length >= 8) {
//     console.log("Strong password");
    
// }
// //Output: Strong password

// //2. else if statement

// /* if (condition1) {
//     //code if condition1 is true
//  } else if (condition2) {
//   //code if condition2 is true
//   } else if (condition3) {
//    //code if condition3 is true
// }*/

// //Example 1: Grading System

// let score = 75;

// if (score >= 90) {
//     console.log("Grade: A+");
// } else if (score >= 75) {
//     console.log("Grade: A");
// } else if (score >= 60) {
//     console.log("Grade: B");
// } else if (score >= 33) {
//     console.log("Grade C");
    
// }
// //---------------------------------
// //Output: Grade A

// let speed = 85;
// if (speed > 100) {
//  console.log("Severe speeding - Heavy fine");
// } else if (speed > 80) {
//  console.log("Speeding - Warning");
// } else if (speed > 60) {
//  console.log("Normal speed");
// }

// let age = 35;
// if (age >= 60) {
//  console.log("Senior citizen");
// } else if (age >= 18) {
//  console.log("Adult");
// } else if (age >= 13) {
//  console.log("Teenager");
// }

// let num = 50;
// if (num > 10) {
//  console.log("Greater than 10"); 
// } else if (num > 30) {
//  console.log("Greater than 30"); 
// } else if (num > 40) {
//  console.log("Greater than 40"); 
// }

// if (condition) {
// } else {
// }

// let age = 16;
// if (age >= 18) {
//  console.log("You can vote");
// } else {
//  console.log("You cannot vote yet");
// }

// let number = 7;
// if (number % 2 === 0) {
//  console.log("Even number");
// } else {
//  console.log("Odd number");
// }

// let temperature = 15;
// if (temperature > 30) {
//  console.log("Hot");
// } else if (temperature > 20) {
//  console.log("Warm");
// } else if (temperature > 10) {
//  console.log("Cool");
// } else {
//  console.log("Cold");
// }

// let username = "admin";
// let password = "1234";
// if (username === "admin" && password === "1234") {
//  console.log("Login successful!");
// } else {
//  console.log("Invalid credentials");
// }

// let marks = 85;
// if (marks >= 33) {
//  if (marks >= 80) {
//  console.log("Outstanding");
//  } else {
//  console.log("Pass");
//  }
// } else {
//  console.log("Better luck next time!");
// }

// let age = 25;
// let isStudent = true;
// if (age < 18) {
//  console.log("Child ticket: $5");
// } else {
//  if (isStudent) {
//  console.log("Student ticket: $8");
//  } else {
//  console.log("Adult ticket: $12");
//  }
// }

// let num = 15;
// if (num > 0) {
//  if (num % 2 === 0) {
//  console.log("Positive even number");
//  } else {
//  console.log("Positive odd number");
//  }
// } else if (num < 0) {
//  console.log("Negative number");
// } else {
//  console.log("Zero");
// }

// f (condition1) {
//  if (condition2) {
//  if (condition3) {
//  if (condition4) {
//  // Too deep!
//  }
//  }
//  }
// }

// let age = 25;
// let hasLicense = true;
// if (age >= 18 && hasLicense) {
//  console.log("Can drive");
// } else {
//  console.log("Cannot drive");
// }

// let score = 85;
// if (score >= 80 && score <= 100) {
//  console.log("Grade A");
// }

// let username = "admin";
// let password = "secret";
// if (username === "admin" && password === "secret") {
//  console.log("Access granted");
// } else {
//  console.log("Access denied");
// }

// et isWeekend = true;
// let isSunny = true;
// if (isWeekend && isSunny) {
//  console.log("Let's go to the beach!");
// }

// let day = "Saturday";
// if (day === "Saturday" || day === "Sunday") {
//  console.log("It's the weekend!");
// }

// let age = 65;
// if (age < 5 || age > 60) {
//  console.log("Free admission");
// } else {
//  console.log("Regular price");
// }

// et isHoliday = false;
// let isBirthday = true;
// if (isHoliday || isBirthday) {
//  console.log("Day off!");
// }

// let isEmergency = true;
// let isVIP = false;
// if (isEmergency || isVIP) {
//  console.log("Priority access");
// }

// let isLoggedIn = false;
// if (!isLoggedIn) {
//  console.log("Please log in");
// }

// let isWeekend = false;
// if (!isWeekend) {
//  console.log("Time to work!");
// }

// console.log(!(5 > 3)); 
// console.log(!(10 < 2)); 
// console.log(!true); 

// let username = "";
// if (!username) {
//  console.log("Username is required");
// }

// let age = 25;
// let isCitizen = true;
// let hasVoted = false;
// if (age >= 18 && isCitizen && !hasVoted) {
//  console.log("Eligible to vote");
// }

// let age = 70;
// let isStudent = false;
// if (age > 60 || isStudent) {
//  console.log("10% discount applies");
// }

// let isAdmin = false;
// let isModerator = true;
// let isOwner = false;
// if (isAdmin || isModerator || isOwner) {
//  console.log("Access granted");
// }

// let temperature = 25;
// let isRaining = false;
// if ((temperature > 20 && temperature < 30) && !isRaining) {
//  console.log("Perfect weather for a picnic!");
// }

// let result = true || false && false;
// let clearer = (true || false) && false; 

// let username = "";
// if (username) {
//  console.log("Welcome, " + username);
// } else {
//  console.log("Please enter a username");
// }

// let score = 0;
// if (score) {
//  console.log("You have " + score + " points");
// } else {
//  console.log("No points yet");
// }

// if ("hello") {
//  console.log("Truthy!"); // This runs
// }
// if (0) {
//  console.log("This won't run"); // 0 is falsy
// }
// if ("") {
//  console.log("This won't run"); // Empty string is falsy
// }
// if ([]) {
//  console.log("Arrays are truthy!"); // This runs
// }

// let userInput = prompt("Enter your name:");
// if (userInput) {
//  alert("Hello, " + userInput);
// } else {
//  alert("You didn't enter a name");
// }

// switch (expression) {
//  case value1:
//  break;
//  case value2:
//  break;
//  default:
// }

// let signal = "yellow";
// switch(signal) {
//  case "red":
//  console.log("Stop");
//  break;
//  case "yellow":
//  console.log("Caution");
//  break;
//  case "green":
//  console.log("Go");
//  break;
//  default:
//  console.log("Invalid Signal");
// }

// switch(day) {
//  case 1:
//  console.log("Monday");
//  break;
//  case 2:
//  console.log("Tuesday");
//  break;
//  case 3:
//  console.log("Wednesday");
//  break;
//  case 4:
//  console.log("Thursday");
//  break;
//  case 5:
//  console.log("Friday");
//  break;
//  default:
//  console.log("Weekend");
// }

// let day = "Saturday";
// switch(day) {
//  case "Saturday":
//  case "Sunday":
//  console.log("Weekend!");
//  break;
//  case "Monday":
//  case "Tuesday":
//  case "Wednesday":
//  case "Thursday":
//  case "Friday":
//  console.log("Weekday");
//  break;
//  default:
//  console.log("Invalid day");
// }

// let grade = "B";
// switch(grade) {
//  case "A":
//  console.log("Excellent work!");
//  break;
//  case "B":
//  console.log("Good job!");
//  break;
//  case "C":
//  console.log("You passed");
//  break;
//  case "D":
//  console.log("Needs improvement");
//  break;
//  case "F":
//  console.log("Failed");
//  break;
//  default:
//  console.log("Invalid grade");
// }

// let signal = "yellow";
// switch(signal) {
//  case "yellow":
//  console.log("Caution");
//  // Missing break!
//  case "green":
//  console.log("Go");
//  break;
//  default:
//  console.log("Invalid");
// }

// let color = "blue";
// switch(color) {
//  case "red": 
//  case "blue": 
// }
// let age = 25;
// if (age < 18) { }
// else if (age >= 18 && age < 65) { }
// else {}

// alert("Your message here");

// alert("Welcome to our website!");

// let userName = "Alice";
// alert("Hello, " + userName + "!");

// let score = 95;
// alert(`Your score is ${score}!`);

// alert("File has been deleted successfully");

// let variable = prompt("Your question");

// let age = prompt("Enter your age:");
// console.log(typeof age); 
// let ageNum = Number(age);
// console.log(typeof ageNum); 

// let userName = prompt("What is your name?");
// console.log("Hello, " + userName);

// let ageStr = prompt("Enter your age:");
// let age = Number(ageStr);
// if (age >= 18) {
//  alert("You are an adult");
// } else {
//  alert("You are a minor");
// }

// let color = prompt("Favorite color?", "blue");
// console.log(color);

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let sum = num1 + num2;
// alert(`The sum is: ${sum}`);

// let temp = Number(prompt("What's the temperature?"));
// if (temp > 30) {
//  alert("It's hot!");
// } else if (temp > 20) {
//  alert("It's warm");
// } else {
//  alert("It's cold");
// }

// let score = Number(prompt("Enter your score:"));
// let grade;
// if (score >= 90) {
//  grade = "A";
// } else if (score >= 80) {
//  grade = "B";
// } else if (score >= 70) {
//  grade = "C";
// } else {
//  grade = "F";
// }
// alert(`Your grade is: ${grade}`);

// let username = prompt("Enter username:");
// let password = prompt("Enter password:");
// if (username === "admin" && password === "1234") {
//  alert("Login successful!");
// } else {
//  alert("Invalid credentials");
// }

// let secretNumber = 7;
// let guess = Number(prompt("Guess the number (1-10):"));
// if (guess === secretNumber) {
//  alert("Correct! You won!");
// } else {
//  alert("Wrong! The number was " + secretNumber);
// }

// let num = Number(prompt("Enter a number:"));
// if (num % 10 === 0) {
//  console.log("Good");
// } else {
//  console.log("Bad");
// }

// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// alert(`${name} is ${age} years old.`);

// let quarter = Number(prompt("Enter quarter (1-4):"));
// switch(quarter) {
//  case 1:
//  console.log("January, February, March");
//  break;
//  case 2:
//  console.log("April, May, June");
//  break;
//  case 3:
//  console.log("July, August, September");
//  break;
//  case 4:
//  console.log("October, November, December");
//  break;
//  default:
//  console.log("Invalid quarter");
// }

// let str = prompt("Enter a string:");
// if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
//  console.log("Golden string!");
// } else {
//  console.log("Not a golden string");
// }

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let num3 = Number(prompt("Enter third number:"));
// let largest;
// if (num1 >= num2 && num1 >= num3) {
//  largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//  largest = num2;
// } else {
//  largest = num3;
// }
// alert(`The largest number is: ${largest}`);

// let total = Number(prompt("Enter cart total:"));
// if (total > 100) {
//  let discount = total * 0.2; // 20% off
//  total = total -- discount;
//  alert(`20% discount applied! New total: $${total}`);
// } else if (total > 50) {
//  let discount = total * 0.1; // 10% off
//  total = total -- discount;
//  alert(`10% discount applied! New total: $${total}`);
// } else {
//  alert(`Total: $${total}`);
// }

// let year = Number(prompt("Enter a year:"));
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//  alert(`${year} is a leap year`);
// } else {
//  alert(`${year} is not a leap year`);
// }

// if (age > 18)
//  console.log("Adult");
//  console.log("Can vote"); 
// if (age > 18) {
//  console.log("Adult");
//  console.log("Can vote");
// }

// if (age = 18) { }
// if (age === 18) { }

// witch(day) {
//  case 1:
//  console.log("Monday"); 
//  case 2:
//  console.log("Tuesday");
// }
// switch(day) {
//  case 1:
//  console.log("Monday");
//  break;
//  case 2:
//  console.log("Tuesday");
//  break;
// }

// let age = prompt("Age:");
// if (age > 18) { } 
// let age = Number(prompt("Age:"));
// if (age > 18) { }

// // if statement
// if (condition) { }
// // if-else
// if (condition) { } else { }
// // if-else if-else
// if (condition1) { }
// else if (condition2) { }
// else { }
// // Logical AND
// if (condition1 && condition2) { }
// // Logical OR
// if (condition1 || condition2) { }
// // Logical NOT
// if (!condition) { }
// // Switch
// switch(variable) {
//  case value1:
//  // code
//  break;
//  case value2:
//  // code
//  break;
//  default:
//  // code
// }
// // User interaction
// alert("Message");
// let input = prompt("Question");
// let num = Number(prompt("Number?"));
// Part A: if-else statements

//Problem 1: Number Sign
// let num = -5;
// if (num > 0) {
//     console.log("Positive");
    
// } else if (num < 0) {
//     console.log("Negative");
    
// } else {
//     console.log("Zero");
    
// }

// Output: Negative


//Problem 2: Eligible for License

// let age = 17; 

// if (age >= 18) {
//     console.log("Eligible for license");
    
// } else {
//     console.log("Not Eligible for license");
// } 

//Output: Not eligible for license

//Problem 3: Grade Calculator

// let marks = 85;

// if (marks >= 90) {
//     console.log("Grade: A");

// } else if (marks >= 80) {
//     console.log("Grade: B");
    
// } else if (marks >= 70) {
//     console.log("Grade: C");
    
// } else if (marks >= 60) {
//     console.log("Grade: D");
    
// } else {
//     console.log("Grade: F");
    
// }

//Output: Grade: B

//Part B: Logical Operators

//Problem 4: Login System

// let username = "admin";
// let passowrd = "12345";

// if (username === "admin" && passowrd === "12345") {
//     console.log("Login sucessful");
    
// } else {
//     console.log("Login failed");
    
// }

//Output: Login successful

// Problem 5: Weekend Check
// let day = "Monday" 

// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend");
    
// } else {
//     console.log("Weekday");
    
// }

//Output: Weekday
//------------------------------------------------
//Problem 6: Ticket Pricing
// let age = 25;

// if (age < 12) {
//   console.log("Ticket price: $5");
// }
// else if (age >= 12 && age < 60) {
//   console.log("Ticket price: $8");
  
// } else if (age >= 60) {
//   console.log("Ticket price: $6");
  
// }
// Output: Ticket price: $8


// Problem 7: Free Shipping

// let orderTotal = 40;
// let isPremium = true;

// if (orderTotal > 50 || isPremium) {
//   console.log("Free Shipping");
  
// } else {
//   console.log("Shipping charges apply");
  
// }

// Output: Free shipping

//Part C : Nested Conditionals

// Problem 8: Pass or Fail with Distinction
// let marks1 = 45;

// if (1 >= 33) {
//   if (marks1 >= 80) {
//     console.log("Pass with distinction");
//   } else {
//     console.log("Pass");
//   }
// } else {
//   console.log("Fail");
// }
// Output: Pass


// Problem 9: Temperature and Rain
let temperature = 25;
let isRaining = false;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
  if (isRaining) {
    console.log("Pleasant but rainy");
  } else {
    console.log("Perfect weather");
  }
} else {
  console.log("Cold day");
}
// Output: Perfect weather


// Problem 10: Day of Week
let dayNum = 3;

switch (dayNum) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}
// Output: Wednesday


// Problem 11: Traffic Light
let signal = "yellow";

switch (signal) {
  case "red": console.log("Stop"); break;
  case "yellow": console.log("Slow down"); break;
  case "green": console.log("Go"); break;
  default: console.log("Invalid signal");
}
// Output: Slow down


// Problem 12: Month to Season
let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;
}
// Output: Summer


// Problem 13: Username Check
let username1 = "";

if (username1) {
  console.log("Welcome " + username1);
} else {
  console.log("Please enter a username");
}
// Output: Please enter a username


// Problem 14: Score Check
let score = 0;

if (score) {
  console.log(score);
} else {
  console.log("No score yet");
}
// Output: No score yet


// Problem 15: Voting Eligibility
let age2 = 20;
let isCitizen = true;
let hasVoted = false;

if (age2 >= 18 && isCitizen && !hasVoted) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
// Output: You can vote


// Problem 16: Discount Calculator
let total = 120;
let isPremium2 = false;

if (isPremium2) {
  total = total - total * 0.2;
} else if (total > 100) {
  total = total - total * 0.15;
} else if (total > 50) {
  total = total - total * 0.1;
}

console.log("Final amount:", total);
// Output: Final amount: 102


// Problem 17: Number Checker (FizzBuzz)
let num3 = 15;

if (num3 % 3 === 0 && num3 % 5 === 0) {
  console.log("FizzBuzz");
} else if (num3 % 3 === 0) {
  console.log("Fizz");
} else if (num3 % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num3);
}
// Output: FizzBuzz


// Problem 18: Age Input
// let userAge = Number(prompt("Enter your age"));
// let userAge;
// if (userAge >= 18) {
//   alert("You can vote");
// } else {
//   alert("You cannot vote");
// }
// Output: Alert based on age


// Problem 19: Simple Calculator
// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let operator = prompt("Enter operator (+, -, *, /)");

// switch (operator) {
//   case "+": alert(num1 + num2); break;
//   case "-": alert(num1 - num2); break;
//   case "*": alert(num1 * num2); break;
//   case "/": alert(num1 / num2); break;
//   default: alert("Invalid operator");
// }
// Output: Calculated result


// Problem 20: Number Guessing
// let secret = 7;
// let guess = Number(prompt("Guess the number"));

// if (guess === secret) {
//   alert("Congratulations!");
// } else if (guess > secret) {
//   alert("Too high!");
// } else {
//   alert("Too low!");
// }
// Output: Based on guess


// Problem 21: Golden String
let str = "Amazing";

if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log("Golden string");
} else {
  console.log("Not a golden string");
}
// Output: Golden string


// Problem 22: Largest of Three
let a = 45;
let b = 67;
let c = 52;

if (a >= b && a >= c) {
  console.log("Largest:", a);
} else if (b >= a && b >= c) {
  console.log("Largest:", b);
} else {
  console.log("Largest:", c);
}
// Output: Largest: 67


// Problem 23: Quarterly Months
let quarter = 2;

switch (quarter) {
  case 1: console.log("January, February, March"); break;
  case 2: console.log("April, May, June"); break;
  case 3: console.log("July, August, September"); break;
  case 4: console.log("October, November, December"); break;
}
// Output: April, May, June


// Problem 24: Divisibility by 10
// let num10 = Number(prompt("Enter a number"));

// if (num10 % 10 === 0) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }
// Output: Good / Bad


// Problem 25: Multiple of 7
let num7 = 14;

if (num7 % 7 === 0 && num7 % 2 === 0) {
  console.log("Special number");
} else if (num7 % 7 === 0) {
  console.log("Lucky number");
} else {
  console.log("Regular number");
}
// Output: Special number

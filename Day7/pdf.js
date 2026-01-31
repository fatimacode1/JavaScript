//Day 7 - Functions & Scopes

//1. Introduction to Functions
//Function Definition
function sayHello() {
  console.log("Hello, World!");
}

//Function Calling
sayHello(); //Output: Hello, World!

//2. Functions with Arguments
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser("Alice");
//Output: Hello, Alice!

greetUser("Bob");
//Output: Hello, Bob!

//3. Calculate Average
function calcAverage(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}
calcAverage(2, 3, 4);
//Output: 3;

calcAverage(10, 20, 30);
//Output: 20

calcAverage(85, 90, 95);
//Output: 90

//average = sum of values/total number of values

//4. The return Keyword
function sum(a, b) {
  return a + b;
  console.log("This will never run");
}

let result = sum(10, 5);
console.log(result); //15

let total = sum(100, 200);
console.log(total); //300

//5. Function Scope
function showScore() {
  let score = 100; //Function Scope
  console.log(score); //Works!
}

showScore(); //Output: 100

// console.log(score);
//Error: score is not defined

//6. Block Scope
//Block Scope Example
{
  let secret = "Hidden";
  console.log(secret); //Works inside
}

// console.log(secret);
//Error: secret is not defined

//Another Example
if (true) {
  let temp = 42;
  console.log(temp);
}
// console.log(temp);
//temp doesn't exist here

//7. Lexical Scope/Closure Scope
function outer() {
  let x = 5;

  function inner() {
    console.log(x); // Can see 'x'
    let y = 10;
  }
  inner();
  //   console.log(y); //Error
}

outer(); //Output: 5

//8. Function Expressions
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); //20
console.log(multiply(10, 3)); //30

//Arrow Function (Modern)
const divide = (a, b) => {
  return a / b;
};

console.log(divide(8, 4)); //2
console.log(divide(15, 3)); //5

//9. Higher-Order Functions
function repeatTask(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

repeatTask(() => console.log("Hello"), 5);

//Same example
{
  function repeatTask(func, n) {
    for (let i = 0; i < n; i++) {
      func();
    }
  }

  const alertUser = () => {
    console.log("Alert");
  };

  repeatTask(alertUser, 4);
  //Output: Alert! Alert! Alert!
}

//Function to Print 'Hi'
function greet() {
  console.log("Hi");
}

repeatTask(greet, 3);
//Output: Hi Hi Hi

//Function to Print Hola
function sayHola() {
  console.log("Hola");
}

repeatTask(sayHola, 5);
//Output: Hola x5

//Function to Print 'Are you sure that u want to delete this permenantly?'
const deletePermenantly = () => {
  console.log("Are you sure that you want to delete this permenantly?");
};
repeatTask(deletePermenantly, 2);

//Another Example
function demo(a, b, c) {
  if (typeof a === "function") a();
  if (typeof b === "function") b();
  if (typeof c === "function") c();
}

demo(1, () => console.log("I'm b"), 3); //I'm b
demo(() => console.log("I'm a"), 2, 3); //I'm a
demo(1, 2, () => console.log("I'm c")); //I'm c

//10. Higher-Order Function Practice
function applyDiscount(price, discountFunc) {
  return discountFunc(price);
}

const tenPercent = (price) => price * 0.9;
const twentyPercent = (price) => price * 0.8;

console.log(applyDiscount(100, tenPercent));
//Output: 90

console.log(applyDiscount(100, twentyPercent));
//Output: 80

//multiplier = 1 - discount%/100

//11. Methods: Long Syntax
//Traditional Method Syntax
const car = {
  brand: "Tesla",
  start: function () {
    console.log("Engine on");
  },
  stop: function () {
    console.log("Engine off");
  },
};

car.start(); //Output: Engine on
car.stop(); //Outpu: Engine offt

//Anonymous function expression (a function without its own name). It doesn't need a name because the function is already "stored" under the property name start.

//Even shorter syntax (common)
{
  const car = {
    start() {
      console.log("Engine on");
    },
    stop() {
      console.log("Engine off");
    },
  };

  car.start();
  car.stop();
}

//12. Methods: Shorthand Syntax

//Modern Shorthand Syntax
const mathTools = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log(mathTools.add(5, 3)); //8
console.log(mathTools.sub(5, 3)); //2
console.log(mathTools.multiply(4, 7)); //28

//Standalone means the function is by itself, not attached to an object/class as a property/method.

//start() {} is an object vs
//function start() {} as a standalone named function

//car = { start() {}} -> start is the object key, call with car.start()
//function start() {} -> start is a function name in scope, call with start()

//Class (blueprint)
class Car {
  constructor(brand) {
    this.brand = brand; //property
  }

  start() {
    console.log(`${this.brand} engine on`);
  }
}

const car1 = new Car("Tesla"); //instance of Car
const car2 = new Car("BMW"); //another instance

car1.start(); //Tesla engine on
car2.start(); //BMW engine on

console.log(car1 instanceof Car); //true

//Another example

class collegeForm {
  submit() {
    console.log(`${this.name} You have submitted the form for course: ${this.courseName} `);
  }
  cancel() {
    console.log(`${this.name} You have cancelled the form for course: ${this.courseName} `);
  }
  fill(givenName, courseName) {
    this.name = givenName;
    this.courseName = courseName;
  }
}

//Create a form for John
let john = new collegeForm();
//Fill the form with John's details
john.fill("John", "CSE");
//Create a form for Sarah
let sarah1 = new collegeForm();
let sarah2 = new collegeForm();
//Fill the forms  with Sarah's Details
sarah1.fill("Sarah", "IT");
sarah2.fill("Sarah", "CSE");

john.submit();
sarah1.submit();
sarah2.submit();
sarah1.cancel();


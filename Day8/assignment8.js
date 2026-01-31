// const car = {
//     brand: "Toyata",
//     model: "Carmy",
//     price: 25000,
//     displayInfo (){
//         console.log(`Brand: ${this.brand }, Model ${this.model},  Price ${this.price}`);
//         applyDisscount( percent)
//     }
// }

// //1

// const student = {
//   name: "Alex",
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   }
// };
// student.getAvg();

// const account = {
//   holder: "Sarah",
//   balance: 5000,
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`${this.holder} deposited $${amount}. New balance: $${this.balance}`);
//   }
// };
// account.deposit(500);

// const cart = {
//   items: ["Apple", "Banana"],
//   total: 2,
//   addItem(item) {
//     this.items.push(item);
//     this.total = this.items.length;
//     console.log(`Added ${item}. Total items: ${this.total}`);
//   }
// };
// cart.addItem("Orange");


// //2

// console.log("Program starts");
// try {
//   console.log(undefinedVariable);
// } catch (err) {
//   console.log("Caught an error: Variable not found");
// }
// console.log("Program continues");

// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw "Cannot divide by zero!";
//     }
//     return a / b;
//   } catch (err) {
//     console.log("Error:", err);
//     return null;
//   }
// }
// console.log(divide(10, 2));
// console.log(divide(10, 0));

// function validateAge(age) {
//   try {
//     if (age < 0) throw "Age cannot be negative!";
//     if (age > 150) throw "Age seems unrealistic!";
//     console.log(`Valid age: ${age}`);
//   } catch (err) {
//     console.log("Validation Error:", err);
//   }
// }
// validateAge(25);
// validateAge(-5);
// validateAge(200);


// //3

// const sum1 = function(a, b) {
//   return a + b;
// };

// const sum2 = (a, b) => {
//   return a + b;
// };

// const sum3 = (a, b) => a + b;

// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("John"));

// const square = (num) => num * num;
// console.log(square(5));
// console.log(square(10));

// const double = num => num * 2;
// console.log(double(7));


// //4

// const calculateTotal = (price, tax) => {
//   return price + price * tax;
// };
// console.log(calculateTotal(100, 0.1));

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);


// //5

// console.log("Starting...");
// setTimeout(() => {
//   console.log("This appears after 3 seconds");
// }, 3000);
// console.log("Continuing...");

// function greetUser(name) {
//   setTimeout(() => {
//     console.log(`Welcome back, ${name}!`);
//   }, 2000);
// }
// greetUser("Alice");

// //6

// let count = 0;
// let id = setInterval(() => {
//   count++;
//   console.log(`Count: ${count}`);
//   if (count === 5) {
//     clearInterval(id);
//     console.log("Counter stopped!");
//   }
// }, 1000);

// let seconds = 0;
// setInterval(() => {
//   seconds++;
//   console.log(`Elapsed time: ${seconds} seconds`);
// }, 1000);

// //7

// let intervalId = setInterval(() => {
//   console.log("Repeating message...");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped!");
// }, 10000);


// //8

// const student2 = {
//   name: "Alex",
//   marks: 95,
//   getName: function() {
//     return this.name;
//   },
//   getMarks: () => {
//     return this.marks;
//   }
// };
// console.log(student2.getName());
// console.log(student2.getMarks());


// //9

// const user1 = {
//   name: "Sarah",
//   greet: function() {
//     setTimeout(function() {
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// };
// user1.greet();

// const user2 = {
//   name: "Sarah",
//   greet: function() {
//     setTimeout(() => {
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// };
// user2.greet();


// //10

// const counter = {
//   count: 0,
//   start: function() {
//     setInterval(() => {
//       this.count++;
//       console.log(this.count);
//     }, 1000);
//   }
// };
// counter.start();

// const calculator = {
//   value: 0,
//   add: (num) => {
//     this.value += num;
//   },
//   subtract: function(num) {
//     this.value -= num;
//   }
// };
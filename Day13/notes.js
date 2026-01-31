//Day 13: Asynchronous JavaScript - Callbacks & Promises

//1. JavaScript is Single-Threaded
// console.log("Step 1: Starting the program");
// console.log("Step 2: Doing some work");
// console.log("Step 3: Finishing up");

//Output (always in this exact order):
//Step 1: Starting the program
//Step 2: Doing some work
//Step 3: Finishing up

//The Blocking Problem
// console.log("Before the long calculation");

// //Imagine this loop takes 5 seconds
// for (let i = 0; i <5000000000; i++) {
//     //Heavy calculation
// }

// console.log("After the long calculation");

//During those 5 seconds, your entire webpage freezes!
//Users can't click buttons , scroll, or do anything.

//2. Synchronous vs. Asynchronous Operations
//All of these are synchronous (instant)
// let x = 10;
// let y = 20;
// let sum = x + y;
// console.log(sum); //30

// let name = "Alice";
// let greeting = "Hello, " + name;
// console.log(greeting); //Hello, Alice

//Asynchronous Code: Operations That Take Time
// console.log("Starting");

// //This is ASYNCHRONOUS - it doesn't block
// setTimeout(() => {
//     console.log("This appears after 2 seconds");
// }, 2000);

// console.log("Ending");

//Output:
//Starting
//Ending 
//(2 seconds pass...)
//This appears after 2 seconds

//3. I/O Bound vs. CPU Bound Tasks

//CPU Bound - The processor is working hard
function fibonacci(n){
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Calculating...");
let result = fibonacci(4); //This will take serveral seconds
console.log("Result", result);
console.log("Done!");

//During the calculation, JavaScript is BLOCKED
//Your webpage will freeze

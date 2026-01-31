//Day 8 - Modern JavaScript Features

//1. The "this" Keyword
const student = {
  name: "Alex",
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    //'this' refers to the 'student' object
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  },
};

student.getAvg();
//Output: Alext got avg marks = 95

//2. Handling Errors Gracefully (try & catch)
console.log("Start of program");

try {
  console.log(undefinedVariable);
  //This variable doesn't exist!
} catch (err) {
  console.log("An error occurred, but we caught it!");
  //You can even print the error: console.log(err);
}

console.log("End of program");
//This runs safely because the error was handled

//3. Arrow Functions (=>)

//Traditional Function 
const sum = function(a, b) {
    return a + b;
};
console.log(sum(5,6));

//Arrow Function
const sum1 = (a, b) => {
    return a + b;
}
console.log(sum1(4, 4));

//Implicit Return (Even Shorter!)
const mul = (a, b) => a * b;
//Automatically returns a * b
console.log(mul(4, 8));

//4. setTimeout - Execute Once
// console.log("Hi there!");

// setTimeout(() => {
//     console.log("This prints after 4 seconds");
    
// }, 4000); //4000ms = 4 seconds

// console.log("Welcome!");

//Output order: 
//Hi there!
//Welcome!
//This prints after 4 seconds

//5. setInterval - Execute Repeatedly 
let id = setInterval(() => {
    console.log("I repeat every 2 seconds");
    
}, 2000);

//To stop it later:
clearInterval(id);

let id1 = setInterval(() => {
    console.log("I repeat every 2 seconds");
    
}, 2000);

clearInterval(id1);

//Stop the interval after it runs 5 times
// let count = 0;

// const id2 = setInterval(() => {
//     count++;
//     console.log("Run", count);
    
//     if (count === 5) {
//         clearInterval(id2);
//         console.log("Stopped after 5 times");
        
//     }
// }, 2000);

//Alternative: stop it after a specific time (like 10 seconds)

// const id3 = setInterval(() => {
//     console.log("Repeating...");
    
// }, 2000);

// setTimeout(() => {
//     clearInterval(id3);
//     console.log("Stopped after 10 seconds");
    
// }, 10000);

//Stop after 5 seconds
// let id4 = setInterval(() => {
//     console.log("I repeat every 2 seconds");
    
// }, 2000);

// setTimeout(() => {
//     clearTimeout(id4);
//     console.log("I stopped the code after 5 seconds");
    
// }, 5000);

//6. "this" with Arrow Functions
const student1 = {
    name: "Alex",
    marks: 95,

    //Regular function: 'this' refers to 'student'
    getName: function() {
        return this.name; //"Alex"
    },
    

//Arrow function: 'this' refers to parent scope
getMarks: () => {
    return this.marks; //undefined!
    //'this' is NOT 'student', it's the global scope
}
};

console.log(student1.getName());
console.log(student1.getMarks());

//You can use arrow functions with this in other cases

const student2 = {
    marks: 95,
    showLater() {
        setTimeout(() => {
            console.log(this.marks);
            
        }, 1000);
    }
};

student2.showLater();

//The rule is:
//Need 'this' to be the object? use normal method (getMarks() {})
//Need to keep the same 'this' inside a callback? arrow is great (() => {})

//Arrow Functions - Perfect for Callbacks
const user = {
    name: "John", 
    greetLater: function() {
        //Arrow functions keeps 'this' pointing to 'user'
        setTimeout(()=> {
            console.log(`Hello from ${this.name}`);
            //this.name works correctly!
            
        }, 1000);
    }
};

user.greetLater();
//Output: (after 1 sec): Hello from John
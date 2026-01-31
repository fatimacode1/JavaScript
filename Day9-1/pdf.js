//Day 9 - Modern Array Methods & ES6 Features

//1. The forEach Method
let prices = [10, 20, 30];
prices.forEach((price) => {
    console.log(`$${price}`);
    
});
//Output: $10, $20, $30

//2. The map Method
let nums = [1, 2, 3, 4];
let doubled = nums.map((num) => num * 2);
console.log(doubled);

//Result: [2, 4, 6, 8]

//3. The filter Method
{
let nums = [2, 4, 1, 5, 6, 2, 7, 8];
let evens = nums.filter((num) => num % 2 === 0);
console.log(evens);
//Result: [2, 4, 6, 2, 8]

}

//4. some and every Methods
let ages = [25, 30, 18, 20];
let allAdults = ages.every(age => age >= 18);
console.log(allAdults);
//true

let hasTeenager = ages.some(age => age < 20);
console.log(hasTeenager);
//true

//5. The reduce Method
{
    let nums = [1, 2, 3, 4];
    let total = nums.reduce((sum, num) => sum + num, 0);
    
    //Execution:
    // 0 + 1 = 1
    // 1 + 2 = 3
    // 3 + 3 = 6
    // 6 + 4 = 10
    // Result: 10
}

//6. Defualt Parameters
function greet(name = "User") {
    console.log(`Hello, ${name}`);
    
}

greet("Alice"); //"Hello Alice"
greet(); //"Hello, User" (uses default)

//7. The Spread Operator (...) 

//Spread with Arrays
let arr = [1, 2, 3];

let newArr = [...arr]; //Copy
let combined = [...arr, 4, 5];
console.log(combined);
//[1, 2, 3, 4, 5]

//Spread with Objects
let user = { name: "Tony", email: "tony@stark.com"};
let updated = {...user, city: "New York"};
console.log(updated);

//8. The Rest Operator (...)
function sum(...numbers) {
    //'numbers' is now an array [1, 2, 3]
    return numbers.reduce((total, num) => total + num);

}

console.log(sum(1, 2, 3)); //6
console.log(sum(5, 10, 15, 20)); //50


//9. Spread vs Rest
//Same syntax (...), opposite purpose!

//SPREAD - Expands
{
    let arr = [1, 2, 3];
    console.log(...arr); //1 2 3 (individual values)
    
}

//REST - Collects
{
function collect(...items){
    console.log(items); //[1, 2, 3] (array)
    
}
collect(1, 2, 3);
}

//10. Array Destructuring 
let podium = ["Gold", "Silver", "Bronze"];
let [winner, runnerUp] = podium;

console.log(winner); //"Gold"
console.log(runnerUp); //"Silver"

//11. Object Destructuring
{
    const student = {
        username: "karan123",
        age: 14
    };

    //Extract and rename 
    const {
        username: user, age
    } = student;
    
    console.log(user); //"karan123"
    console.log(age); //14
    
    
}

//12. Destructuring + Defaults

//Array with defaults
let [a = 5, b = 10] = [1];
//a = 1, b = 10 (default)

//Object with defaults
let { name = "Guest", age = 18} = {name: "Alice"};
//name = "Alice", age = 18 (default)
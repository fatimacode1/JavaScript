let nums = [1, 2, 3, 4];

let total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);

//Execution:
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
//Result: 10

function greet(name = "User") {
    console.log(`Hello, ${name}`);
    
}

greet("Alice"); //"Hello, Alice"
greet(); //"Hello, User" (uses default)

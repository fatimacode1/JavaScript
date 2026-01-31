// var x = 7;
// function getName() {
//     console.log("Hello JS!");
    
// }

// getName();
// console.log(x);

// getName();
// console.log(x);

// var x = 7;

// function getName() {
//     console.log("Hello JS!");
    
// }

// function sayHello() {
//     console.log("Hello");
    
// }
// sayHello();


// function greetUser(name) {
//     console.log(`Hi, ${name}!`);
    
// }

// greetUser("John");
// greetUser("Sarah")

// function calcAvg(a, b, c) {
//     let avg = (a + b + c) / 3;
//     console.log(avg);
    
// }
// calcAvg(10, 20, 30);
// calcAvg(1, 2, 3);

// function calcAvg(a, b, c) {
//     let avg = (a + b + c) / 3;
//    return avg;
    
// }
// let result = calcAvg(10, 20, 30);
// console.log(result);

// let result1 = calcAvg(1, 2, 3);
// console.log(result1);


// function add(a, b) {
//     return a + b;
//     console.log("This will never run");
    
// }

// let result = add(5, 5);
// console.log(result);

// let total = add(10, 10);
// console.log(total);


// function showScore() {
//     let score = 100;
//     console.log(score);
    
// }
// showScore();

// // console.log(score);


// {
//     let secret = "Hidden";
//     console.log(secret);
    
// }
// console.log(secret); {}

// if (true) {
//     let temp = 40;
//     console.log(temp);
    
// }
// console.log(temp);

// function outer() {
//     let x = 7;

//     function inner() {
//         let y = 8;
//         console.log(x);
        
//     }

//     inner();
//     // console.log(y);
    
// }
// outer();

// const sum = function (a, b) {
//     return a + b;
// }

// console.log(sum(2, 3));

// const sub = (a, b) => a - b;
// console.log(sub(10,5));


// function repeatTask(func, n) {
//     for (let i = 0; i < n; i++) {
//         func();
//     }

// }

// const alertUser = () => {
//    console.log("Alert")
// };

// repeatTask(alertUser, 3);

// function repeatTask(func, n) {
//     for (let i = 0; i < n; i++) {
//         func()
//     }

// }

//  const alertUser = () => {
//         console.log("Alert");
        
//     }
// repeatTask(alertUser, 3)

// function applyDiscount(price, discountFunc) {
//     return discountFunc(price)
// }

// const tenPercent = (price) => price * 0.9;
// const twentyPercent = (price) => price * 0.8;

// console.log(applyDiscount(100, tenPercent))
// console.log(applyDiscount(100, twentyPercent))


// const car = {
//     brand: "Tesla",
//     start: function() {
//         console.log("Engine On");
        
//     },
//     stop: function() {
//         console.log("Engine Off");
        
//     }
// }
// car.start()
// car.stop()

// const mathTools = {
//     add(a, b) {
//         return a + b
//     },

//     sub(a, b) {
//         return a - b
//     },
//     mul(a, b) {
//         return a * b
//     }
// }

// console.log(mathTools.add(3, 5));
// console.log(mathTools.sub(10, 9));

// const student = {
//     name: "Alex",
//     eng: 99,
//     math: 98,
//     phy: 96,
//     chem:95,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy +this.chem) / 5
//         console.log(`${this.name} got avg ${avg}`);
        
//     }
// }
// student.getAvg()

// console.log("Start");

// try {
//     console.log(und);

    
// } catch (error) {
//     console.log("Catch error");
    
// }

// console.log("End");

// const sum = function(a, b) {
//  return a + b;
    
// }

// console.log(sum(5,5));

// const sum1 = (a, b) => {
//     return a + b;
// }


// console.log(sum1(4,8));

// const sum2 = (a, b) => a + b;
// console.log(sum2(1, 1));


// console.log("Hi there!");

// setTimeout(() => {
//     console.log("4 sec");
    
// }, 4000)

// console.log("Wel");


// let id = setInterval(() => {
//     console.log("repeat 2 secs");
    
// }, 2000)

// clearInterval(id)

// console.log(typeof this);

// const student = {
//     name: "A",
//     marks: "88",
//     getName: function() {
//         console.log(this.name);
        
//     },
//     getMarks:() => {
//         console.log(this.marks);
        
//     }
// }
// student.getName()
// student.getMarks()


// const user = {
//     name: "Alex",
//     greetLater: function() {
// setTimeout(() => {
//     console.log("Hello Later ${this.name}");
    
// }, 2000)
//     }
// }
// user.greetLater()

// let prices = [10, 20, 30 , 40]

// prices.forEach((price) => {
//     console.log(price);
    
// }  )

// let items = [10, 20 , 30 , 40]
// items.forEach((item) => {
//     console.log(item);
   
// })


// let nums = [1, 2, 3, 4] 
// let result = nums.map((num) => num * 2)
// console.log(result);


// let nums = [1,2,3,4,5,6,7]

// let evens = nums.filter((num) => num % 2 === 0) 
// console.log(evens);

//  let ages = [19, 39, 12, 14, 20]

//  let allAdults = ages.every( age => age > 18)
// console.log(allAdults);

// let someTeenager = ages.some(age => age < 18)
// console.log(someTeenager);


// let nums = [1, 2, 3, 4]
// let sums = nums.reduce((acc, curr) => acc + curr, 0)
// console.log(sums);

// function greet( name= "User") {
//     console.log(`hi, ${name}`);
    
// }
// greet("a")
// greet()

// let arr = [1, 2, 3, 4]
// let newArr = [...arr]
// let combined = [...arr,5, 6]
// console.log(combined);
// console.log(arr);
// console.log(newArr);

// let user = {name: "Tony", email: "tony@gmail.com"}
// let upd = { ...user, city: "dubai"}
// console.log(user);
// console.log(upd);

function sum(...nums) {
   let res = nums.reduce((acc, curr) => acc + curr)
   console.log(res)
}
;


sum(1, 2, 3)
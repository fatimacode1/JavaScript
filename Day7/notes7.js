// // function sayHello(){
// //     console.log("Hello, World!");

    
// // }
// // sayHello();

// //simple freetng function
// // function greet() {
// //     console.log("Welcome to javaScript!");
    
// // }

// //Display a message
// // function showMessage(){
// //     console.log("Learning function is fun!");
// //     }
// //     showMessage();

// //Multiple actions in one frame
// // function introduction(){
// //     console.log("My name is JavaScript");
// //     console.log("I run created in 1995");
// //     console.log("I run in browsers");
// //     }
// //     introduction();

// //Functions with Arguments
// // function functionName(parameter1,parameter2){
// //     //code that uses the parameter
// // }

// // //Example 1: Personalized greeting
// // function greetUser(name){
// //     console.log("Hello, "+name+"!");
// //     }
// //     greetUser("Alice");
// //       greetUser("Bob");
// //         greetUser("Charlie");

// //Example 2: Caculate sum of two numbers
// // function addNumbers(a,b){
// //     let sum = a + b;
// //     console.log("Sum is:"+sum);
// //     }
// //     addNumbers(5,3)
// //     addNumbers(10,20)

// //Example 3: calculate average of three numbers
// // function calcAverage(a,b,c){
// //     let avg = (a + b + c)/3;
// //     console.log(avg);
// // }
// // calcAverage(10,20,30);
// // calcAverage(85,90,95);

// //Example 4: Create Personalized messages
// // function createMessage(name,age){
// //     console.log(name + "is" + age + "years old");
// //     }
// //     createMessage("Sarah",25);
// //     createMessage("Tom",30);

// //Example %: Calculate rectangle area
// // function calculateArea(length,width){
// // let area = length*width;
// // console.log("Area is:" + area);

// //     }
// //     calculateArea(5,10);
// //     calculateArea(7,3);

// //3. The Return Keyword
// //Example 1: Sum of two numbers
// // function sum(a,b){
// //     return a + b;

// // }
// // let result = sum(10,5);
// // console.log(result);

// // let total = sum(100,200);
// // console.log(total);

// //Example 2: Return product of two numbers
// // function multiply(x,y){
// //     return x * y;
// //     }
// //     let answer = multiply(4,5);
// //     console.log(answer);
// //     console.log(multiply(3,7));

// //Example 3: Code after return never runs
// // function test(){
// //     return 10;
// //     console.log("This will never print");
// //     return 20;
// // }

// // let value = test();
// // console.log(value);

// //Example 4: Using return value in calculations
// // function getPrice(){
// //     return 50;
// // }

// // let price = getPrice();
// // let tax = price * 0.1;
// // let total = price + tax;
// // console.log(total);

// //Example 5: Return string
// // function getGreeting(name){
// //     return"Hello, " + name;
// // }

// // let message = getGreeting("Alice");
// // console.log(message);

// // console.log(getGreeting("Bob"));


// //Function Scope
// //Example 1 : Basic function scope 
// // function showScore(){
// //     let score = 100;
// //     console.log(score);
    
// // }

// // showScore();
// // console.log(score); // Errror

// //Example 2: Each Function has its own scope 
// // function func1(){
// //     let x = 10;
// //     console.log(x);
    
// // }

// // function func2(){
// //     let x = 20;
// //     console.log(x);
    
// // }

// // func1();
// // func2();

// //Block Scope 
// //Example 3 : Block scope with if statement
// // if (true){
// //     let temp = 42;
// //     console.log(temp);
    
// // }
// // console.log(temp); //Error

// //Example 4: Block scopw with loops
// // for (let i=0;i<3;i++){
// //     console.log(i);
// //     }
// //     console.log(i); //Error

// //Example 5: B;ock scope with curly braces
// // {
// //     let secret = "Hidden";
// //     console.log(secret);
// //     }
// //     console.log(secret); //Error

//     //5
//     //Lexical Scope
//     //Example 1: Inner function accessing auter variable
// //     function outer(){
// //         let x = 5;

// //         function inner(){
// //             console.log(x);
            
// //         }
// //         inner();
// //     }

// //     outer();

// //     //Example 2 : Multiple levels of nesting
// //     function level1(){
// //         let a = 10;

// //         function level2(){
// //             let b = 20;

// //             function level3(){
// //                 console.log(a);
// //                 console.log(b);
                
                
// //             }
// //             level3();
// //         }

// // level2();

// //     }

// //     level1();
    
// //Example 3: Outer cannot access inner variables
// // function outer(){
// //     function inner(){
// //         let secret = "Hiddden";

// //     }

// //     inner();
// //     console.log(secret); //error
// //     }

// // outer();

// //Example 4: Using outer parameters in inner function
// // function greet(name){
// //     function creteMessage(){
// //         return"Hello," + name;
// // }
// // console.log(creteMessage());
// // }

// // greet("Alice");

// //Function Expressions
// //Example 1: Basic function expression
// // const multiply = function(a,b){
// //     return a * b;
// // };
// // console.log(multiply(4,5));
// // console.log(multiply(0,3));

// //Example 2: function expression with greeting
// // const sayHi = function(name){
// //     console.log("Hi," + name +"!");
    
// // };

// // sayHi("Tom");
// // sayHi("Sarah");

// //Example 3: Arrow function (modern syntax
// // const square = (num) => {
// //     return num * num;
// // };
// // console.log(square(5));
// // console.log(square(10));

// //Example 4: Storing different functons 
// // const add = function (a,b){
// //     return a + b;
// // };

// // const subtract = function(a,b){
// //     return a - b;

// // };

// // console.log(add(10,5));
// // console.log(subtract(10,5));

// //Hiher order function
// //Example 1 : Function accepting another function

// // function repeatTask(func,n){
// //     for (i=0; i<n; i++){
// //         func();
// //     }
// // }

// // const alertUser = () => {
// // console.log("Alert!");

// // };

// // repeatTask(alertUser,3);

// // //Example 2 : Apply discount to price

// // function applyDiscount(price, discountFunc){
// //     return discountFunc(price);

// // }

// // const tenPercent = (price) => price * 0.9;
// // const twentyPercent  = (price) => price*0.8;

// // console.log(applyDiscount(100,tenPercent));
// // console.log(applyDiscount(100, twentyPercent));


// //Example 3: Execute Different operations 
// // function calculate(a,b,operation){
// //     return operation(a,b);
// // }

// // const add= (x,y) => x+y;
// // const multiply=(x,y) => x*y;

// // console.log(calculate(5,3,add));
// // console.log(calculate(5,3,multiply));

// //Process array elements
// // function processArray(arr,processor){
// //     for(i=0; i<arr.length; i++){
// //         processor(arr[i]);
// //     }
// // }
// // const printDouble =(num) =>{
// //     console.log(num*2);
    
// // };

// // processArray([1,2,3], printDouble);

// //Methods
// //Traditional Syntax
// // const car = {
// //     brand:"Tesla",
// //     start:function(){
// //         console.log("Engine on");
        
// //     },
// //     stop:function(){
// //         console.log("Engine off");
        
// //     }
// // };

// // car.start();
// // car.stop();

// // //Modern Shoethand Syntax
// // const mathTools={
// //     add(a,b){
// //         return a + b;
// //     },
// //     subtract(a,b){
// //         return a - b; 
// //     }
// // };


// // console.log(mathTools.add(5,3));
// // console.log(mathTools.subtract(10,4));

// //Examples:1 Calculator Object
// // const Calculator= {
// //     add(a,b){
// //         return a + b;
// //     },
// //     multiply(a,b) {
// //         return a * b;
// //     }
// // };

// // console.log(Calculator.add(10,5));
// // console.log(Calculator.multiply(4,7));

// // //Example 2: Person object with methods
// // const person = {
// //     name: "Alice",
// //     greet(){
// //         console.log("Hello, Iam " + this.name);
        
// //     },
// //     sayAge(age){
// //         console.log("I am " +age +" years old ");
        
// //     }
// // };
// // person.greet();

// // person.sayAge(25);

// //Banlance account object
// const account ={
//     balance : 1000,
//     depoist(amount){
//         this.balance = this.balance + amount;
//         console.log("Newbalance: "+ this.balance);
        
//     },
//     withdraw(amount){
//         this.balance= this.balance - amount;
//         console.log("New balance: " + this.balance);
        
//     }
// };

// account.depoist(500);
// account.withdraw(200);

// //Example 4: String formatter object
// const formatter ={
//     toUpper(str){
//         return str.toUpperCase();

//     },
//      toLower(str){
//         return str.toLowerCase();
//     },
//     trim(str){
//         return str.trim();
//     }
// };
// console.log(formatter.toUpper("hello"));
// console.log(formatter.toLower("World"));
// console.log(formatter.trim(" spaces "));

// //Example 5: Counter object
// const counter = {
//     count: 0,
//     increment(){
//         this.count++;
//         console.log("Count: " + this.count);
        
//     },
//     reset(){
//         this.count = 0;
//         console.log("Counter reset");
        
//     }
// };

// counter.increment();
// counter.increment();
// counter.reset();
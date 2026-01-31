// //1.
// // function printPattern(){
// //     console.log("*");
// //     console.log("**");
// //     console.log("***");
// //     console.log("****");
    
// // }
// // printPattern();

// // //2 
// // function studentInfo(){
// //     console.log("Name: Jom Doe");
// //     console.log("Age: 20");
// //     console.log("Course: JavaScript");
      
// // }
// // studentInfo();

// // //section 2: Function with Arguments
// // function multiplyThree(a,b,c){
// //     console.log(a * b * c);
    
// // }
// // multiplyThree(2,3,4);
// // multiplyThree(5,5,2);

// // //Q2
// // function isEligibleToVote(name,age){
// //     if(age >= 18){
// //         console.log(name + "is eligible to vote");
// //       } else {
// //         console.log(name + " is not eligible to vote");
        
// //       }
// // }

// // isEligibleToVote("Alice",20);
// // isEligibleToVote("Bob", 16);

// // //section 3
// // //1
// // function findLargest(a,b){
// //     return a > b ? a: b;
// // }
// // let max = findLargest(10,25);
// // console.log(max);

// //2
// function calculateDiscount(price, discountPercent){
//     return price = (price * discountPercent / 100);
// }

// let finalPrice = calculateDiscount(100,20);
// console.log(finalPrice);

// let salePrice = calculateDiscount(500,10);
// console.log(salePrice);

// //4
// //Understanding Scopes 
// // let x = 10
// // function test (){
// //     let x = 20;
// //     console.log(x);
// //     }
// //     test();
// //     console.log(x);

// function calculate(){
//     let result = 100;
// }
// calculate();
// console.log(result);

// //section:5 Lexical Scope
// function parent(){
//     let a = 10;
//     function child(){
//         let b = 20;
//         console.log(a + b);
        
//     }
//     child();
//     console.log(b);
    
// }
// parent();
    
// //section 6:
// //convert a function Expression
// //1
// // const divide = function (a,b){
// //     return a/b;
// // };
//     //2
//     // const celsiusToFahrenheit = function(celsius){
//     //     return(celsius * 9/5) + 32;
//     // };

//     // console.log(celsiusToFahrenheit(25));
    
//     // //Higher-Order Functions
// //     function executeOperation(a, b, operation){
// //         return operation(a, b);
// //     }

// //     const add = (a, b) =>{
// //       return a + b;
// //     }; 

// //     const multiply = (a, b) =>{
// //         return a * b;
// //     };

// //     console.log("Addition result:", executeOperation(5, 3, add));
// //     console.log("Multiplication result:", executeOperation(5, 3, multiply));
    
// //    //error

// //    //repeat
// //    function repeat(fn,n){
// //     for(let i=0; i<n; i++){
// //         fn();
// //     }
// //    }
        
// //    const sayHello = () => 
// //     console.log("Hello");
// //    repeat(sayHello, 4);


//     //Method
//     const student = {
//         name:"Alice",
//         marks:[85,90,78,92],
//         getAverage(){
//             let sum = 0
//             for (i=0; i < this.marks.length; i++){
//                 sum += this.marks[i];
//             }
//             return sum / this.marks.length;
//         }

//     };

//     console.log(student.getAverage());
    
    
// //rectangle 
// const rectangle = {
//     length:10,
//     width:5,
//     getArea(){
        
//     }

// }

// function printPattern(){
// console.log("*")
// console.log("**")
// console.log("***")
// console.log("****")
// }
// printPattern()

// function studentInfo(){
// console.log("Name: John Doe")
// console.log("Age: 20")
// console.log("Course: JavaScript")
// }
// studentInfo()

// function multiplyThree(a,b,c){
// console.log(a*b*c)
// }
// multiplyThree(2,3,4)
// multiplyThree(5,5,2)

// function isEligibleToVote(name,age){
// if(age>=18){
// console.log(name+" is eligible to vote")
// }else{
// console.log(name+" is not eligible to vote")
// }
// }
// isEligibleToVote("Alice",20)
// isEligibleToVote("Bob",16)

// function findLargest(a,b){
// return a>b?a:b
// }
// let max=findLargest(10,25)
// console.log(max)

// function calculateDiscount(price,discount){
// return price-(price*discount/100)
// }
// let finalPrice=calculateDiscount(100,20)
// console.log(finalPrice)
// let salePrice=calculateDiscount(500,10)
// console.log(salePrice)

// let x=10
// function test(){
// let x=20
// console.log(x)
// }
// test()
// console.log(x)

// function outer(){
// let message="Hello"
// function inner(){
// console.log(message)
// }
// inner()
// }
// outer()

// function calculate(){
// let result=100
// console.log(result)
// }
// calculate()

// function parent(){
// let a=10
// function child(){
// let b=20
// console.log(a+b)
// }
// child()
// }
// parent()

// const divide=function(a,b){
// return a/b
// }

// const celsiusToFahrenheit=function(c){
// return (c*9/5)+32
// }
// console.log(celsiusToFahrenheit(25))

// function executeOperation(a,b,operation){
// return operation(a,b)
// }
// const add=(a,b)=>a+b
// const multiply=(a,b)=>a*b
// console.log(executeOperation(5,3,add))
// console.log(executeOperation(5,3,multiply))

// function repeat(fn,n){
// for(let i=0;i<n;i++){
// fn()
// }
// }
// const sayHello=()=>console.log("Hello!")
// repeat(sayHello,4)

// const student={
// name:"Alice",
// marks:[85,90,78,92],
// getAverage(){
// let sum=0
// for(let m of this.marks){sum+=m}
// return sum/this.marks.length
// }
// }
// console.log(student.getAverage())

// const rectangle={
// length:10,
// width:5,
// getArea(){
// return this.length*this.width
// },
// getPerimeter(){
// return 2*(this.length+this.width)
// }
// }
// console.log(rectangle.getArea())
// console.log(rectangle.getPerimeter())
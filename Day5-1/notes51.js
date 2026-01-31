//Nestd loops for Arrays
// for (let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//         console.log(`i=${i},j=${j}`);
        
//     }
// }

//Output
//i=1,j=1
// i=1,j=2
// i=1,j=3
// i=2,j=1
// i=2,j=2
// i=2,j=3
// i=3,j=1
// i=3,j=2
// i=3,j=3

// for (let i=1; i<=3; i++){
//     for (let j=1; j<=3; j++){
//         console.log(`i=${i},j=${j}`);
        
//     }
// }

// for (let i=1; i<=3; i++){
//     for (let j=1; j<=3; j++){
//         console.log(`i=${i},j=${j}`);
        
//     }
// }

//Multiplication Table 
// for (let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//         console.log(`${i} * ${j} =${i*j}`);
        
//     }
// }

//output
// 1 * 1 =1
// 1 * 2 =2
// 1 * 3 =3
// 1 * 4 =4
// 1 * 5 =5
// 2 * 1 =2
// 2 * 2 =4
// 2 * 3 =6
// 2 * 4 =8
// 2 * 5 =10
// 3 * 1 =3
// 3 * 2 =6
// 3 * 3 =9
// 3 * 4 =12
// 3 * 5 =15
// 4 * 1 =4
// 4 * 2 =8
// 4 * 3 =12
// 4 * 4 =16
// 4 * 5 =20
// 5 * 1 =5
// 5 * 2 =10
// 5 * 3 =15
// 5 * 4 =20
// 5 * 5 =25

// for (let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
// }

// for (let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//     console.log(`${i} * ${j} = ${i * j}`);
    
// }

//}

// for (let i=0; i<=5; i++){
//     for (let j=0; j<=5; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
        
//     }
// }


//Star Pattern Right Traingle

// for(let i=1; i<=5; i++){
//     let row ="";
//     for (let j=1; j<=i; j++){
// row +="*";
//     }
//     console.log(row);
//     }

//output
// *
// * *
// * * *
// * * * *
// * * * * *

// for (i=1; i<=5; i++){
//     let row ="";
//     for (j=1; j<=i; j++){
// row+="*";
//     }
//     console.log(row);
//     }

//     for (let i=1; i<=5; i++){
//         let row ="";
//         for(let j=1; j<=i; j++){
//             row +="* ";
// }
//         console.log(row);
//        }

//Reverse Traingle
// for (let i = 5; i >= 1; i--){
//     let row ="";
//     for (let j = 1; j <= i; j++){
//         row += " * ";
//     }
//     console.log(row);
//     }
    //output
//     *  *  *  *  * 
//  *  *  *  * 
//  *  *  * 
//  *  * 
//  * 

// for (let i = 5; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j <= i; j++){
//         row += " * ";
//     }
//     console.log(row);
//     }

//     for (let i = 5; i >= 1; i--){
//     let row ="";
//     for (let j = 1; j <= i; j++){
//         row += " * ";
//     }
//     console.log(row);
// }

//Number Grid 
// for (let row = 1; row <= 4; row++){
//     let line ="";
//     for (let col = 1; col <= 4; col++){
//         line += col +"";
//     }
//     console.log(line);
    
// }
    
// 1234
// 1234
// 1234
// 1234

// for (let row = 1; row <= 4; row++){
//     let line ="";
//     for (let col = 1; col <= 4; col++){
//         line += col +"";
//     }
//     console.log(line);
    
// }

// for (let row = 1; row <= 4; row ++){
//     let line ="";
//     for (let col = 1; col <= 4; col ++){
//         line += col +"";
//     }
//     console.log(line);
    
// }

//Square Pattern
// let size = 5;
// for (let i = 1; i <= size; i++){
//     let row ="";
//     for (let j = 1; j <= size; j++){
//         row +="#"
//     }
//     console.log(row);
//     }

// #####
// #####
// #####
// #####
// #####

// let size = 5;
// for ( let i = 1; i <= size; i++){
//     let row ="";
//     for( let j = 1; j <= size; j++){
//         row +="#";
//     }
//     console.log(row);
// }

// let size = 5;
// for (let i = 1; i <= size; i++){
//     let row ="";
//     for (let j = 1; j <= size; j++){
//         row +="#";
//     }
//     console.log(row);
    
// }

//Loop with Nested Arrays
//Simple 2D Array
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for (let i=0; i<matrix.length; i++){
//     for(let j=0; j<matrix[i].length; j++){
//         console.log(matrix[i][j]);
//         }
// }

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// let matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for (let i=0; i<matrix.length; i++){
//     for (j=0; j<matrix[i].length; j++){
//         console.log(matrix[i][j]);
        
//     }
// }

// let matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]

// ];

// for (let i=0; i<matrix.length; i++){
//     for (let j=0; j<matrix[i].length; j++){
//         console.log(matrix[i][j]);
        

//     }
// }

//Teams and Players
// let teams = [
//     ["Alice", "Bob"],
//     ["Charlie", "David"],
//     ["Eve", "Frank"]
// ];

// for (let i=0; i<teams.length; i++){
//     console.log(`Team ${i + 1}:`);
//     for (let j=0; j<teams[i].length; j++){
//         console.log(` -${teams[i][j]}`);
//         }
// }

// output
// Team 1:
//  -Alice
//  -Bob
// Team 2:
//  -Charlie
//  -David
// Team 3:
//  -Eve
//  -Frank

// let teams=[
//     ["Alice", "Bob"],
//  ["charlie", "David"],
//     ["Eve", "Frank"]
// ];

// for (let i=0; i<teams.length; i++){
//     console.log(`Team ${i + 1}:`);
//     for (let j=0; j<teams[i].length; j++){
//         console.log(` ${teams[i][j]}`);
        
//     }
    
// }
    
// let teams = [
//     ["Alice", "Bob"],
//     ["Charlie", "David"],
//     ["Eve", "Frank"]
// ];

// for (let i=0; i<teams.length; i++){
//     console.log(`Team ${i + 1}:`);
//     for (let j=0; j<teams[i].length; j++){
//         console.log(` ${teams[i][j]}`);
        
//     }
    
// }

// Student Grades
// let grades= [
//     [85,90,78],
//     [92,88,95],
//     [76,82,80]
// ];

// for (let i=0; i<grades.length; i++){
//     let sum =0;
//     for (let j=0; j<grades[i].length; j++){
//         sum += grades[i][j];
//     }
//     let average = sum/grades[i].length;
//     console.log(`Student ${i + 1} average:${average.toFixed(2)}`);
//     }
    
//     Student 1 average:84.33
// Student 2 average:91.67
// Student 3 average:79.33

// Sum All Elemnets in 2D Array
// let numbers =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let total = 0;
// for (let i=0; i<numbers.length; i++){
//     for (let j=0; j<numbers[i].length; j++){
//         total += numbers[i][j];
//     }
// }
// console.log(`Total sum:${total}`);

// //output
// Total sum:45

// Find Element in 2D Array
// let data =[
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ];
// let searchFor=50;
// let found = false;

// for(let i=0; i<data.length; i++){
//     for (let j=0; j<data[i].length; j++){
//         if (data[i][j]===searchFor){
//             console.log(`Found ${searchFor} at [${i}][${j}]`);
//             found = true;
//             break;
//         }
//     }
//     if (found) break;
// }

// //output
// //Found 50 at [1][1]

//Nested for.. of Loops
//Basic Nested for.. of
// let groups = [
//     ["A", "B", "C"],
//     ["D", "E"],
//     ["F", "G", "H","I"]
// ];

// for (let group of groups){
//     for (let item of groups){
//         console.log(item);
//         }
// }

// [ 'A', 'B', 'C' ]
// [ 'D', 'E' ]
// [ 'F', 'G', 'H', 'I' ]
// [ 'A', 'B', 'C' ]
// [ 'D', 'E' ]
// [ 'F', 'G', 'H', 'I' ]
// [ 'A', 'B', 'C' ]
// [ 'D', 'E' ]
// [ 'F', 'G', 'H', 'I' ]

//Departments and Employees
// let company=[
//     ["Alice", "Bob", "Charlie"],
//     ["David", "Eve"],
//     ["Frank", "Grace"]
// ];
// for (let department of company){
//     for (let employee of department){
//         console.log(employee);
        
//     }
// }

// Alice
// Bob
// Charlie
// David
// Eve
// Frank
// Grace

//Count Total Items
// let inventory = [
//     [10, 20, 15],
//     [5,8],
//     [30, 12, 25, 18]
// ];

// let totalItems = 0;
// for (let shelf of inventory){
//     for (let count of shelf){
//         totalItems += count;
//     }
//     console.log(`Total items: ${totalItems}`);
    
// }

//Flatten Nested Array
// let nested = [
//     [1,2,3],
//     [4,5],
//     [6,7,8,9]
// ];

// let flat = [];
// for (let subArray of nested){
//     for (let element of subArray){
//         flat.push(element);
//     }
//     console.log(flat);
    
// }

//Words in Sentences
// let paragraphs = [
//     ["Hello", "world"],
//     ["JavaScript", "is", "awesome"],
//     ["Loops", "are", "powerful"]
// ];
// for(let sentence of paragraphs){
//     let line ="";
//     for (let word of sentence){
//         line += word + "";
// }
// console.log(line.trim());

// }
// Helloworld
// JavaScriptisawesome
// Loopsarepowerful

//for..of Loops with Nested Array
//Print All Values

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// for (let row of matrix){
//     for (let value of row){
//         console.log(value);
        
//     }
// }
// output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//Shopping List
// let shoppingLists = [
//     ["milk", "braed", "eggs"],
//     ["apple", "banana"],
//     ["chicken", "rice", "beans", "salad"]
// ];
// let listNumber = 1;
// for (let list of shoppingLists){
//     console.log(`List $ {ListNumber}:`);
//     for (let item of list){
//         console.log(` -${item}`);
//         }
//         listNumber++;
//     }
//     List $ {ListNumber}:
//  -milk
//  -braed
//  -eggs
// List $ {ListNumber}:
//  -apple
//  -banana
// List $ {ListNumber}:
//  -chicken
//  -rice
//  -beans
//  -salad

//Temperature Data
// let weeklyTemps = [
//     [72,75,78],
//     [68,70,73,76],
//     [80,82]
// ];
// for (let week of weeklyTemps){
//     let sum =0;
//     for (let temp of week){
//         sum += temp;
// }
// let avg = sum / week.length;
// console.log(`Average: ${avg.toFixed(1)}}°F`);
// }

// //Find the maximum in 2D Array
// let scores =[
//     [78,92,85],
//     [88,95,79],
//     [90,87,93]
// ];
// let max = scores[0][0];
// for (let row of scores){
//     for (let score of row){
//         if (score > max){
//             max = score;
//         }
//     }
// }
// console.log(`Highest score:${max}`);

//courses and Topics
// let courses = [
//     ["HTML", "CSS", "JavaScript"],
//     ["python", "Django"],
//     ["React", "Node.js", "MangoDB", "Express"]
// ];
// console.log("Available Courses:");
// for (let course of courses){
//     let topics ="";
//     for (let topic of course){
//         topics += topic +",";
//     }
//     console.log(topics.slice(0,-2));
    
// }

//for vs for.. of with Nested Arrays 
///using for loop
// let data = [
//     [10,20],
//     [30,40,50]
// ];
// for (let i=0; i<data.length; i++){
//     for (let j=0; j<data[i].length; j++){
//         console.log(`data[${i}}][${j}]=${data[i][j]}`);
//         }
// }

//Ussing for.. of Loop
let data =[
    [10,20],
    [30,40,50]
];
for (let row of data){
    for (let value of row){
        console.log(value);
        }
}

//Tic-tac-toe
// let board =[
//     ["x","o","x"],
//     ["o","x","o"],
//     ["x","o","x"]
// ];
// for (let row of board){
//     let line ="";
//     for (let cell of row){
//         line += cell +"";
//     }
//     console.log(line);
//     }

    //class Roaster by Grade
    // let students =[
    //     ["Alice", "Bob", "charlie"],
    //     ["David", "Eve"],
    //     ["Frank", "Grace", "Henry", "Ivy"]
    // ];

    // let grade =10;
    // for(let classroom of students){
    //     console.log(`Grade $ {grade}:`);
    //     for(let student of classroom){
    //         console.log(`${student}`);
    //         }
    //    grade++; 
    // }

    //RGB color Values
//     let colors =[
//         [255,0,0],
//         [0,255,0],
//         [0,0,255]
//     ];
//     let colorNames = ["Red","Green","Blue"];
//     let index=0;
//     for (let rgb of colors){
//         let values ="";
//         for(let value of rgb){
//             values += value +",";
//         }
//         console.log(`${colorNames[index]}:rgb(${values.slice(0,-2)})`);
//         index++;
// }

//Montly Sales data
// let quarterlySales = [
//     [15000,18000,21000],
//     [19000,22000,25000],
//     [23000,26000,28000]
// ];
// let quarter = 1;
// for (let months of quarterlySales){
//     let total = 0;
//     for (let sales of months){
//         total += sales;
//     }
//     console.log(`QS{quarter} Total:$${total}`);
//     quarter++;
// }

//Seating Arrangement
// let cinema =[
//     ["A1","A2","A3"],
//     ["B1","B2","B3","B4"],
//     ["C1","C2"]
// ];
// console.log("Searting Chart:");
// for (let row of cinema){
//     let seats ="";
//     for(let seat of row){
//         seats +=`[${seat}]`;
//     }
//     console.log(seats);
    
// }

//Quick Reference
//Nested for loop
// for(let i=0; i<outer; i++){
//     for (let j=0; j<inner; j++){

// }
// }

//for loop with nested array
// let arr =[[1,2],[3,4]];
// for(let i=0; i<arr.length; i++){
//     for(j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
        
//     }
// }

//Nested for..of
// for (let subArray of array){
//     for (let element of subArray){
//         console.log(element);
//         }
// }

//f
// or..pf with nested array
// let data =[[1,2],[3,4]];
// for(let row of data){
//     for(let value of row){
//         console.log(value);
        
//     }
// }


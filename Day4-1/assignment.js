// //section 1
// //problem 1
// let numbers1 = [10, 20, 30, 40, 50, 60, 70];
// let slice1 = numbers1.slice(2, 5);
// let slice2 = numbers1.slice(-3);
// console.log(slice1);
// console.log(slice2);
// console.log(numbers1);
// //output
// // [30, 40, 50]
// // [50, 60, 70]
// // [10, 20, 30, 40, 50, 60, 70]

// //problem 2
// let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"];
// let morning = songs.slice(0, 3);
// let evening = songs.slice(-2);
// let exceptFirst = songs.slice(1);
// console.log(morning, evening, exceptFirst);
// //output
// // ["Song1","Song2","Song3"] ["Song5","Song6"] ["Song2","Song3","Song4","Song5","Song6"]


// //section 2
// //problem 1
// let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
// let removed = colors.splice(2, 2);
// console.log(removed, colors);
// //output
// // ["blue","yellow"] ["red","green","purple","orange"]

// //problem 2
// let nums1 = [1, 2, 3, 7, 8, 9];
// nums1.splice(3, 0, 4, 5, 6);
// console.log(nums1);
// //output
// // [1,2,3,4,5,6,7,8,9]


// //section 3
// //problem 1
// let fruits = ["banana", "apple", "mango", "cherry", "orange"];
// fruits.sort();
// console.log(fruits);
// let nums2 = [5, 10, 1, 100, 25];
// nums2.sort();
// console.log(nums2);
// //output
// // ["apple","banana","cherry","mango","orange"]
// // [1,10,100,25,5]

// //problem 2
// let scores = [78, 92, 85, 88, 95, 73];
// scores.sort((a,b)=>a-b);
// console.log(scores);
// scores.sort((a,b)=>b-a);
// console.log(scores[0], scores[scores.length-1]);
// //output
// // [73,78,85,88,92,95]
// // 95 73


// //section 4
// //problem 1
// let words = ["JavaScript", "is", "awesome"];
// console.log(words.join(" "));
// console.log(words.join("-"));
// console.log(words.join(""));
// //output
// // JavaScript is awesome
// // JavaScript-is-awesome
// // JavaScriptisawesome

// //problem 2
// let dateArray = ["2024", "12", "25"];
// let time = ["14", "30", "00"];
// console.log(dateArray.join("/"));
// console.log(dateArray.join("-"));
// console.log(time.join(":"));
// //output
// // 2024/12/25
// // 2024-12-25
// // 14:30:00


// //section 5
// //problem 1
// let nums3 = [1,2,3,4,5];
// let str = nums3.toString();
// console.log(str, typeof str);
// console.log(nums3.join());
// //output
// // "1,2,3,4,5" string
// // "1,2,3,4,5"

// //problem 2
// let grid = [[1,2],[3,4],[5,6]];
// console.log(grid.toString());
// console.log(grid.join());
// //output
// // 1,2,3,4,5,6
// // 1,2,3,4,5,6


// //section 6
// //problem 1
// let a1 = new Array();
// let a2 = new Array(5);
// let a3 = new Array(10,20,30);
// console.log(a1, a1.length);
// console.log(a2, a2.length);
// console.log(a3, a3.length);
// //output
// // [] 0
// // [empty × 5] 5
// // [10,20,30] 3

// //problem 2
// let fillArr = new Array(4);
// fillArr[0]="a"; fillArr[1]="b"; fillArr[2]="c"; fillArr[3]="d";
// console.log(fillArr);
// console.log(["a","b","c","d"]);
// //output
// // ["a","b","c","d"]


// //section 7
// //problem 1
// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray("hello"));
// console.log(Array.isArray(123));
// console.log(Array.isArray({name:"John"}));
// //output
// // true false false false

// //problem 2
// let data = [1,2,3];
// if(Array.isArray(data)) console.log(`It's an array with ${data.length} elements`);
// data = "hello";
// console.log(Array.isArray(data) ? "Array" : "Not an array");
// //output
// // It's an array with 3 elements
// // Not an array


// //section 8
// //problem 1
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(matrix[0][2], matrix[2][0], matrix[1][1]);
// matrix[1][1]=50;
// console.log(matrix);
// //output
// // 3 7 5
// // [[1,2,3],[4,50,6],[7,8,9]]

// //problem 2
// let seats = [["Alice","Bob","Charlie"],["David","Eve","Frank"]];
// console.log(seats[0][1], seats[1][2]);
// [seats[0][0], seats[1][2]] = [seats[1][2], seats[0][0]];
// console.log(seats);
// //output
// // Bob Frank
// // [["Frank","Bob","Charlie"],["David","Eve","Alice"]]


// //section 9
// //problem 1
// let grades = [["John",85,90,88],["Sarah",92,88,95],["Mike",78,85,80]];
// console.log(grades[0][2], grades[1][0]);
// console.log(grades[2][1]+grades[2][2]+grades[2][3]);
// //output
// // 90 Sarah
// // 243

// //problem 2
// let game = [["X","O","X"],["O","X","O"],["O","X","X"]];
// console.log(game[0][0], game[1][1]);
// game[2][2]="O";
// game.forEach(r=>console.log(r));
// //output
// // X X
// // ["X","O","X"]
// // ["O","X","O"]
// // ["O","X","O"]


// //section 10
// //problem 1
// let items = [10,20,30,40,50];
// console.log(items.length);
// items.length=3;
// console.log(items, items[4]);
// //output
// // 5
// // [10,20,30] undefined

// //problem 2
// let nums4=[1,2,3];
// nums4[10]=99;
// console.log(nums4, nums4.length, nums4[5]);
// //output
// // [1,2,3,empty ×7,99] 11 undefined


// //section 11
// //problem 1
// let words2=[" hello "," WORLD "," JavaScript "];
// let clean=words2.map(w=>w.trim().toLowerCase());
// console.log(clean.sort().join(" "));
// //output
// // hello javascript world

// //problem 2
// let morningTasks=["Exercise","Breakfast","Study"];
// let eveningTasks=["Dinner","Reading","Sleep"];
// let tasks=morningTasks.concat(eveningTasks);
// tasks.splice(3,0,"Lunch");
// console.log(tasks.sort());
// //output
// // ["Breakfast","Dinner","Exercise","Lunch","Reading","Sleep","Study"]


// //section 12
// //problem 1
// let original=[1,2,3,4,5];
// let ref=original;
// let copy=original.slice();
// ref[0]=99;
// copy[0]=88;
// console.log(original,ref,copy);
// //output
// // [99,2,3,4,5] [99,2,3,4,5] [88,2,3,4,5]

// //problem 2
// let colors2=["red","green","blue"];
// let p1=colors2,p2=colors2;
// p1.push("yellow");
// console.log(colors2,p1,p2);
// //output
// // ["red","green","blue","yellow"]


// //section 13
// //problem 1
// let rot=[10,20,30,40,50];
// rot.push(rot.shift());
// rot.push(rot.shift());
// console.log(rot);
// //output
// // [30,40,50,10,20]

// //problem 2
// let items2=["apple","banana","cherry","date","banana"];
// let i=items2.indexOf("banana");
// items2.splice(i,1);
// console.log(items2, items2.includes("banana"));
// //output
// // ["apple","cherry","date","banana"] true


// //section 14
// //problem 1
// let data2=[5,10,15,20,25];
// console.log(7<data2.length?data2[7]:"Index out of bounds");
// console.log(2<data2.length?data2[2]:"Index out of bounds");
// //output
// // Index out of bounds
// // 15

// //problem 2
// let input=[1,2,3];
// console.log(Array.isArray(input)&&input.length>0?input[0]:"Invalid");
// input="hello";
// console.log(Array.isArray(input)?"Array":"Not array");
// //output
// // 1
// // Not array


// //section 15
// //problem 1
// let cart=[];
// cart.push("Laptop","Mouse","Keyboard");
// console.log(cart.length);
// console.log(cart.pop());
// console.log(cart.join(", "));
// //output
// // 3
// // Keyboard
// // Laptop, Mouse

// //problem 2
// let highScores=[150,200,180,220,190];
// highScores.sort((a,b)=>b-a);
// console.log(highScores[0]);
// console.log(highScores.slice(0,3).join(" | "));
// //output
// // 220
// // 220 | 200 | 190


// //section 16
// //problem 1
// let allScores=[85,92,78,95,88,73,90];
// let s=allScores.slice().sort((a,b)=>a-b);
// s.shift(); s.pop();
// console.log(s.reduce((a,b)=>a+b)/s.length);
// //output
// // 88.75

// //problem 2
// let t=["Task1","Task2","Task3","Task4"];
// t.push(t.shift());
// t.splice(2,0,"Task2.5");
// t.splice(t.indexOf("Task3"),1);
// t.forEach((v,i)=>console.log(`${i+1}. ${v}`));
// //output
// // 1. Task2
// // 2. Task2.5
// // 3. Task4
// // 4. Task1


// //section 17
// //problem 1
// let n=[1,10,2,20,3,30];
// console.log(n.slice().sort());
// console.log(n.slice().sort((a,b)=>a-b));
// //output
// // [1,10,2,20,3,30]
// // [1,2,3,10,20,30]

// //problem 2
// let sparse=[1,, ,4,,6];
// console.log(sparse.length, sparse[2]);
// sparse.push(7);
// console.log(sparse, sparse.length);
// //output
// // 6 undefined
// // [1,empty ×2,4,empty,6,7] 7

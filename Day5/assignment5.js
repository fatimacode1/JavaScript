// // 1
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // 2
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// 3
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast off!");

// // 4
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 × ${i} = ${7 * i}`);
// }

// // 5
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   sum += i;
  
// }
// console.log("Sum:", sum);

// // 6
// for (let row = 1; row <= 4; row++) {
//   let line = "";
//   for (let col = 1; col <= 4; col++) {
//     line += col + " ";
//   }
//   console.log(line);
// }

// 7
for (let i = 1; i <= 5; i++) {
  let stars = "";
for (let j = 1; j <= i; j++) {
stars += "* ";
 }
 console.log(stars);
 }


// // 8
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // 9
// let total = 0;
// let number = 1;
// let count = 0;

// while (total < 50) {
//   total += number;
//   number++;
//   count++;
// }

// console.log("Final sum:", total);
// console.log("Numbers added:", count);

// // 11
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("First number divisible by both 3 and 5:", i);
//     break;
//   }
// }

// // 12
// for (let i = 1; i <= 10; i++) {
//   if (i === 3 || i === 6 || i === 9) {
//     continue;
//   }
//   console.log(i);
// }


// // 13
// let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
// for (let i = 0; i < cities.length; i++) {
//   console.log(i + ": " + cities[i]);
// }

// //14
// let numbers = [10, 25, 30, 45, 20];
// let sumArray = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sumArray += numbers[i];
// }
// console.log("Sum:", sumArray);

// // 15
// let scores = [78, 92, 85, 99, 88, 76];
// let max = scores[0];

// for (let i = 1; i < scores.length; i++) {
//   if (scores[i] > max) {
//     max = scores[i];
//   }
// }
// console.log("Maximum score:", max);

// // 16
// let teams = [
//   ["Alice", "Bob"],
//   ["Charlie", "David"],
//   ["Eve", "Frank"]
// ];

// for (let i = 0; i < teams.length; i++) {
//   for (let j = 0; j < teams[i].length; j++) {
//     console.log(teams[i][j]);
//   }
// }


// // 17
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// // 18
// let word = "LOOP";
// for (let char of word) {
//   console.log(char);
// }


// // 19
// let sentence = "JavaScript is awesome";
// let vowelCount = 0;

// for (let char of sentence.toLowerCase()) {
//   if ("aeiou".includes(char)) {
//     vowelCount++;
//   }
// }
// console.log("Number of vowels:", vowelCount);


// //20
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // 21
// let original = [10, 20, 30, 40, 50];
// let reversed = [];

// for (let i = original.length - 1; i >= 0; i--) {
//   reversed.push(original[i]);
// }
// console.log("Reversed array:", reversed);
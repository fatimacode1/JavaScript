// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// for (let i = 0; i < 100; i++) {
//   console.log("Hello");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 × ${i} = ${5 * i}`);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Blast off!");

// /*
// for (let i = 1; i <= 5; ) {
//   console.log(i);
// }

// for (let i = 1; i >= 0; i++) {
//   console.log(i);
// }

// for (let i = 1; ; i++) {
//   console.log(i);
// }
// */

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }


// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let sum = 0;
// let num = 1;
// while (sum < 50) {
//   sum += num;
//   console.log(`Added ${num}, sum is now ${sum}`);
//   num++;
// }
// console.log(`Final sum: ${sum}`);

// let password = "";
// let attempts = 0;
// while (password !== "secret123" && attempts < 3) {
//   password = prompt("Enter password:");
//   attempts++;

//   if (password === "secret123") {
//     console.log("Access granted!");
//   } else if (attempts < 3) {
//     console.log(`Wrong password. ${3 - attempts} attempts remaining.`);
//   } else {
//     console.log("Access denied. Too many attempts.");
//   }
// }

// let number = 1000;
// while (number > 1) {
//   number = number / 2;
//   console.log(number);
// }

// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop: ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(` Inner loop: ${j}`);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += (i * j) + "\t";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// for (let row = 1; row <= 4; row++) {
//   let line = "";
//   for (let col = 1; col <= 4; col++) {
//     line += `(${row},${col}) `;
//   }
//   console.log(line);
// }

// for (let i = 5; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "* ";
//   }
//   console.log(stars);
// }

// let choice;
// do {
//   console.log("Menu:");
//   console.log("1. Play");
//   console.log("2. Settings");
//   console.log("3. Exit");
//   choice = prompt("Enter your choice:");
// } while (choice !== "3");

// let roll;
// let rollAttempts = 0;
// do {
//   roll = Math.floor(Math.random() * 6) + 1;
//   rollAttempts++;
//   console.log(`Roll ${rollAttempts}: ${roll}`);
// } while (roll !== 6);
// console.log(`Got a 6 after ${rollAttempts} attempts!`);

// let numInput;
// do {
//   numInput = Number(prompt("Enter a positive number:"));
//   if (numInput <= 0 || isNaN(numInput)) {
//     console.log("Invalid input.");
//   }
// } while (numInput <= 0 || isNaN(numInput));
// console.log(`You entered: ${numInput}`);

// let counter = 0;
// do {
//   console.log(`Count: ${counter}`);
//   counter++;
// } while (counter < 0);

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 0) {
//     console.log(`First number divisible by 7: ${i}`);
//     break;
//   }
// }

// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// let searchFor = "orange";
// let found = false;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === searchFor) {
//     console.log(`Found ${searchFor} at index ${i}`);
//     found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log(`${searchFor} not found`);
// }

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// let cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];
// for (let i = 0; i < cities.length; i++) {
//   console.log(`${i}: ${cities[i]}`);
// }

// let scores = [85, 92, 78, 95, 88];
// let totalScore = 0;
// for (let i = 0; i < scores.length; i++) {
//   totalScore += scores[i];
// }
// let average = totalScore / scores.length;
// console.log(`Total: ${totalScore}, Average: ${average}`);

// let numbers = [23, 67, 12, 89, 45, 91, 34];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(`Maximum value: ${max}`);

// let colors = ["red", "green", "blue", "yellow"];
// console.log("Original order:");
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// console.log("Reverse order:");
// for (let i = colors.length - 1; i >= 0; i--) {
//   console.log(colors[i]);
// }

// let ages = [12, 25, 17, 30, 15, 40, 19];
// let adults = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     adults.push(ages[i]);
//   }
// }
// console.log("Adults:", adults);

// let teams = [
//   ["Alice", "Bob"],
//   ["Charlie", "David"],
//   ["Eve", "Frank"]
// ];
// for (let i = 0; i < teams.length; i++) {
//   console.log(`Team ${i + 1}:`);
//   for (let j = 0; j < teams[i].length; j++) {
//     console.log(` - ${teams[i][j]}`);
//   }
// }

// let colors2 = ["Red", "Blue", "Green", "Yellow"];
// for (let color of colors2) {
//   console.log(color);
// }

// let prices = [19.99, 29.99, 49.99, 9.99];
// let totalPrice = 0;
// for (let price of prices) {
//   totalPrice += price;
// }
// console.log(`Total: $${totalPrice.toFixed(2)}`);

// let word = "JavaScript";
// for (let char of word) {
//   console.log(char);
// }

// let sentence = "Hello World";
// let vowels = "aeiouAEIOU";
// let vowelCount = 0;
// for (let char of sentence) {
//   if (vowels.includes(char)) {
//     vowelCount++;
//   }
// }
// console.log(`Number of vowels: ${vowelCount}`);

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// let original = [10, 20, 30, 40, 50];
// let reversed = [];
// for (let i = original.length - 1; i >= 0; i--) {
//   reversed.push(original[i]);
// }
// console.log("Reversed:", reversed);
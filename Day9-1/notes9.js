//JavaScript Day 9: Modern Array Methods (Part 1)

//1. The forEach Method

//array.forEach((element, index, array) => {
    //code to execute for each element}
    //);


//Example 1: Print all elements

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.forEach((fruit) => {
//  console.log(fruit);
// });
// // Output:
// // Apple
// // Banana
// // Mango
// // Orange




// Example 2: Print with index

// let colors = ["Red", "Green", "Blue"];
// colors.forEach((color, index) => {
//  console.log(`${index}: ${color}`);
// });
// // Output:
// // 0: Red
// // 1: Green
// // 2: Blue




// //Example 3: Calculate sum using external variable

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;
// numbers.forEach((num) => {
//  sum += num;
// });
// console.log(`Total: ${sum}`); // Total: 150




// //Example 4: Add formatted prices

// let prices = [99, 149, 299, 499];
// prices.forEach((price) => {
//  console.log(`₹${price}.00`);
// });
// // Output:
// // ₹99.00
// // ₹149.00
// // ₹299.00
// // ₹499.00




// //Example 5: Push to another array

// let names = ["alice", "bob", "charlie"];
// let upperNames = [];
// names.forEach((name) => {
//  upperNames.push(name.toUpperCase());
// });
// console.log(upperNames); // ["ALICE", "BOB", "CHARLIE"]




// //Example 6: Print multiplication table

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//  console.log(`5 x ${num} = ${5 * num}`);
// });
// // Output:
// // 5 x 1 = 5
// // 5 x 2 = 10
// // 5 x 3 = 15
// // 5 x 4 = 20
// // 5 x 5 = 25




// //Example 7: Working with objects

// let students = [
//  { name: "Rahul", age: 20 },
//  { name: "Priya", age: 22 },
//  { name: "Arjun", age: 19 }
// ];
// students.forEach((student) => {
//  console.log(`${student.name} is ${student.age} years old`);
// });
// // Output:
// // Rahul is 20 years old
// // Priya is 22 years old
// // Arjun is 19 years old




// // Example 8: Checking conditions

// let scores = [85, 92, 78, 45, 90];
// scores.forEach((score) => {
//  if (score >= 80) {
//  console.log(`${score} - Excellent!`);
//  } else {
//  console.log(`${score} - Keep trying!`);
//  }
// });





// //2. The map Method

// let newArray = array.map((element, index, array) => {
//  return transformedElement;
// });





// //Example 1: Double all numbers

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((num) => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
// console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)





// // Example 2: Convert to uppercase

// let names = ["alice", "bob", "charlie"];
// let upperNames = names.map((name) => name.toUpperCase());
// console.log(upperNames); // ["ALICE", "BOB", "CHARLIE"]




// // Example 3: Square all numbers

// let nums = [2, 3, 4, 5];
// let squares = nums.map((num) => num ** 2);
// console.log(squares); // [4, 9, 16, 25]




// //Example 4: Extract object properties

// let students = [
//  { name: "John", marks: 85 },
//  { name: "Sarah", marks: 92 },
//  { name: "Mike", marks: 78 }
// ];
// let names = students.map((student) => student.name);
// console.log(names); // ["John", "Sarah", "Mike"]




// // Example 5: Add GST to prices

// let prices = [100, 200, 150, 300];
// let pricesWithGST = prices.map((price) => price * 1.18);
// console.log(pricesWithGST); // [118, 236, 177, 354]




//Example 6: Create full names

// let firstNames = ["Raj", "Priya", "Amit"];
// let lastNames = ["Sharma", "Patel", "Kumar"];
// let fullNames = firstNames.map((firstName, index) => {
//  return `${firstName} ${lastNames[index]}`;
// });
// console.log(fullNames);
// // ["Raj Sharma", "Priya Patel", "Amit Kumar"]




//Example 7: Format as currency

// let amounts = [100, 250, 500, 1000];
// let formatted = amounts.map((amount) => `₹${amount}.00`);
// console.log(formatted);
// // [" // ["₹₹100.00", " 100.00", "₹₹250.00", " 250.00", "₹₹500.00", " 500.00", "₹₹1000.00"]




//Example 8: Create HTML elements

// let items = ["Home", "About", "Services", "Contact"];
// let menuItems = items.map((item) => `<li>${item}</li>`);
// console.log(menuItems);
// // ["<li>Home</li>", "<li>About</li>", "<li>Services</li>", "<li>Contact</li>"]




//Example 9: Temperature conversion

// let celsius = [0, 10, 20, 30, 40];
// let fahrenheit = celsius.map((temp) => (temp * 9/5) + 32);
// console.log(fahrenheit); // [32, 50, 68, 86, 104]





//Example 10: Add index to items

// let fruits = ["Apple", "Banana", "Mango"];
// let numberedList = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
// console.log(numberedList);
// // ["1. Apple", "2. Banana", "3. Mango"]




// //3. The filter Method

// let newArray = array.filter((element, index, array) => {
//  return condition; // must return true or false
// });




// //Example 1: Get even numbers

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]

// //Example 2: Get odd numbers

// let numbers = [15, 22, 31, 44, 57, 60];
// let odds = numbers.filter((num) => num % 2 !== 0);
// console.log(odds); // [15, 31, 57]

// // Example 3: Get passing grades

// let grades = [45, 78, 89, 34, 92, 56, 67];
// let passing = grades.filter((grade) => grade >= 50);
// console.log(passing); // [78, 89, 92, 56, 67]


// // Example 4: Filter by string length

// let words = ["hi", "hello", "bye", "goodbye", "hey"];
// let longWords = words.filter((word) => word.length > 3);
// console.log(longWords); // ["hello", "goodbye"]

// // // Example 5: Get adults only

// // let people = [
// //  { name: "John", age: 17 },
// //  { name: "Sarah", age: 22 },
// //  { name: "Mike", age: 15 },
// //  { name: "Emma", age: 25 },
// //  { name: "Tom", age: 16 }
// // ];
// // let adults = people.filter((person) => person.age >= 18);
// // console.log(adults);
// // // [{ name: "Sarah", age: 22 }, { name: "Emma", age: 25 }]


// // //Example 6: Get names starting with 'A'

// // let names = ["Alice", "Bob", "Andrew", "Charlie", "Amanda"];
// // let aNames = names.filter((name) => name[0] === "A");
// // console.log(aNames); // ["Alice", "Andrew", "Amanda"]

// // //Example 7: Filter affordable items

// // let products = [
// //  { name: "Laptop", price: 50000 },
// //  { name: "Mouse", price: 500 },
// //  { name: "Keyboard", price: 1500 },
// //  { name: "Monitor", price: 15000 }
// // ];
// // let affordable = products.filter((product) => product.price <= 2000);
// // console.log(affordable);
// // // [{ name: "Mouse", price: 500 }, { name: "Keyboard", price: 1500 }]

// //Example 8: Remove specific items

// // let cart = ["apple", "banana", "apple", "mango", "apple", "orange"];
// // let withoutApples = cart.filter((item) => item !== "apple");
// // console.log(withoutApples); // ["banana", "mango", "orange"]

// //Example 9: Get positive numbers

// let numbers = [5, --3, 8, --1, 0, 12, --7, 4];
// let positives = numbers.filter((num) => num > 0);
// console.log(positives); // [5, 8, 12, 4]


// //Example 10: Get completed tasks

// let tasks = [
//  { task: "Buy milk", done: true },
//  { task: "Clean room", done: false },
//  { task: "Study", done: true },
//  { task: "Exercise", done: false }
// ];
// let completed = tasks.filter((item) => item.done === true);
// console.log(completed);
// // [{ task: "Buy milk", done: true }, { task: "Study", done: true }]


// //4. some and every Methods

// //4.1 The every Method

// // let result = array.every((element) => {
// //  return condition; // true or false
// // });


// //Example 1: Check if all are adults

// let ages = [20, 25, 18, 30, 22];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // true


// //Example 2: Check if all failed

// let ages = [20, 25, 17, 30, 22];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // false (17 < 18)


// //Example 3: Check if all numbers are positive

// let numbers = [5, 10, 15, 20];
// let allPositive = numbers.every((num) => num > 0);
// console.log(allPositive); // true


// //Example 4: Check if all students passed

// let marks = [78, 85, 92, 67, 89];
// let allPassed = marks.every((mark) => mark >= 50);
// console.log(allPassed); // true

// //Example 5: Check if all products are in stock

// let products = [
//  { name: "Laptop", inStock: true },
//  { name: "Mouse", inStock: true },
//  { name: "Keyboard", inStock: false }
// ];
// let allAvailable = products.every((product) => product.inStock === true);
// console.log(allAvailable); // false



// //4.2 The some Method

// // let result = array.some((element) => {
// //  return condition; // true or false
// // });


// //Example 1: Check if any teenager exists

// let ages = [20, 25, 17, 30, 22];
// let hasTeenager = ages.some((age) => age < 18);
// console.log(hasTeenager); // true (17 is a teenager)


// //Example 2: Check if any negative number

// let numbers = [5, 10, --3, 20, 15];
// let hasNegative = numbers.some((num) => num < 0);
// console.log(hasNegative); // true


// //Example 3: Check if any student failed

// let marks = [78, 85, 92, 45, 89];
// let anyoneFailed = marks.some((mark) => mark < 50);
// console.log(anyoneFailed); // true (45 < 50)

// //Example 4: Check if any product is cheap

// let prices = [1500, 2000, 450, 3000];
// let hasCheapItem = prices.some((price) => price < 500);
// console.log(hasCheapItem); // true (450 < 500)


// //Example 5: Check if any task is incomplete

// let tasks = [
//  { task: "Buy milk", done: true },
//  { task: "Clean room", done: false },
//  { task: "Study", done: true }
// ];
// let hasIncomplete = tasks.some((item) => item.done === false);
// console.log(hasIncomplete); // true


// //4.3 Comparing some and every

// //Example 1: Age checking

// let ages = [20, 25, 18, 30, 22];
// // every - ALL must be adults
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // true
// // some - AT LEAST ONE must be adult
// let someAdults = ages.some((age) => age >= 18);
// console.log(someAdults); // true


// //Example 2: With one failing case

// let ages = [20, 25, 15, 30, 22];
// // every - ALL must be adults (fails because of 15)
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults); // false
// // some - // some - AATT LEAST LEAST ONE must be adult (passes because others ar ONE must be adult (passes because others are adults) e adults)
// let someAdults = ages.some((age) => age >= 18);
// console.log(someAdults); // true


// //Example 3: Numbers check

// let numbers = [2, 4, 6, 8, 10];
// // every - ALL must be even
// let allEven = numbers.every((num) => num % 2 === 0);
// console.log(allEven); // true
// // some - AT LEAST ONE must be even
// let someEven = numbers.some((num) => num % 2 === 0);
// console.log(someEven); // true


// //Example 4: Empty cart scenario

// let prices = [150, 200, 300];
// // every - ALL must be affordable
// let allAffordable = prices.every((price) => price <= 100);
// console.log(allAffordable); // false
// // some - // some - AATT LEAST LEAST ONE must be affor ONE must be affordable dable
// let someAffordable = prices.some((price) => price <= 100);
// console.log(someAffordable); // false

// //JavaScript Day 9.2: Advanced Array Methods & ES6 Features

// //1. The reduce Method

// //Example 1: Sum of all numbers

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => {
//  return total + num;
// }, 0);
// console.log(sum); // 15
// // Step-by-step execution:
// // total = 0, num = 1 → return 0 + 1 = 1
// // total = 1, num = 2 → return 1 + 2 = 3
// // total = 3, num = 3 → return 3 + 3 = 6
// // total = 6, num = 4 → return 6 + 4 = 10
// // total = 10, num = 5 → return 10 + 5 = 15


// //Example 2: Product of all numbers

// let numbers = [2, 3, 4, 5];
// let product = numbers.reduce((result, num) => result * num, 1);
// console.log(product); // 120 (2 * 3 * 4 * 5)


// //Example 3: Calculate total price

// let cart = [
//  { item: "Shirt", price: 500 },
//  { item: "Shoes", price: 1200 },
//  { item: "Hat", price: 300 }
// ];
// let total = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(total); // 2000


// //Example 4: Count occurrences

// let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];
// let count = fruits.reduce((counter, fruit) => {
//  counter[fruit] = (counter[fruit] || 0) + 1;
//  return counter;
// }, {});
// console.log(count);
// // { apple: 3, banana: 2, mango: 1 }


// //Example 5: Flatten nested arrays

// let nested = [[1, 2], [3, 4], [5, 6]];
// let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flat); // [1, 2, 3, 4, 5, 6]


// //Example 6: Find longest word

// let words = ["hi", "hello", "hey", "goodbye"];
// let longest = words.reduce((longest, word) => {
//  return word.length > longest.length ? word : longest;
// }, "");
// console.log(longest); // "goodbye"


// //Example 7: Group by category

// let items = [
//  { name: "Apple", type: "fruit" },
//  { name: "Carrot", type: "vegetable" },
//  { name: "Banana", type: "fruit" },
//  { name: "Potato", type: "vegetable" }
// ];
// let grouped = items.reduce((result, item) => {
//  if (!result[item.type]) {
//  result[item.type] = [];
//  }
//  result[item.type].push(item.name);
//  return result;
// }, {});
// console.log(grouped);
// // { fruit: ["Apple", "Banana"], vegetable: ["Carrot", "Potato"] }


// //Example 8: Calculate average

// let scores = [85, 90, 78, 92, 88];
// let sum = scores.reduce((total, score) => total + score, 0);
// let average = sum / scores.length;
// console.log(average); // 86.6


// //2. Finding Maximum in Array

// //Example 1: Find maximum number

// let numbers = [45, 78, 23, 89, 34, 12];
// let max = numbers.reduce((maximum, num) => {
//  return num > maximum ? num : maximum;
// });
// console.log(max); // 89

// //Example 2: Find maximum with initial value

// let numbers = [45, 78, 23, 89, 34];
// let max = numbers.reduce((maximum, num) => {
//  return num > maximum ? num : maximum;
// }, numbers[0]);
// console.log(max); // 89


// //Example 3: Find minimum number

// let numbers = [45, 78, 23, 89, 34, 12];
// let min = numbers.reduce((minimum, num) => {
//  return num < minimum ? num : minimum;
// });
// console.log(min); // 12


// //Example 4: Find highest price

// let products = [
//  { name: "Laptop", price: 50000 },
//  { name: "Mouse", price: 500 },
//  { name: "Monitor", price: 15000 }
// ];
// let maxPrice = products.reduce((max, product) => {
//  return product.price > max ? product.price : max;
// }, 0);
// console.log(maxPrice); // 50000



// //Example 5: Find student with highest marks

// let students = [
//  { name: "Rahul", marks: 85 },
//  { name: "Priya", marks: 92 },
//  { name: "Arjun", marks: 78 }
// ];
// let topper = students.reduce((highest, student) => {
//  return student.marks > highest.marks ? student : highest;
// });
// console.log(topper); // { name: "Priya", marks: 92 }


// //3. Default Parameters

// //Example 1: Simple greeting

// function greet(name = "Guest") {
//  console.log(`Hello, ${name}!`);
// }
// greet("Alice"); // Hello, Alice!
// greet(); // Hello, Guest!


// //Example 2: Calculate with tax

// function calculateTotal(price, taxRate = 0.18) {
//  return price + (price * taxRate);
// }
// console.log(calculateTotal(1000)); // 1180 (uses 18% tax)
// console.log(calculateTotal(1000, 0.10)); // 1100 (uses 10% tax)

// //Example 3: Multiple defaults

// function createUser(name, age = 18, country = "India") {
//  return { name, age, country };
// }
// console.log(createUser("Raj"));
// // { name: "Raj", age: 18, country: "India" }
// console.log(createUser("Priya", 25));
// // { name: "Priya", age: 25, country: "India" }
// console.log(createUser("Tom", 30, "USA"));
// // { name: "Tom", age: 30, country: "USA" }


// //Example 4: Power function

// function power(base, exponent = 2) {
//  return base ** exponent;
// }
// console.log(power(5)); // 25 (5^2)
// console.log(power(5, 3)); // 125 (5^3)
// console.log(power(2, 4)); // 16 (2^4)


// //Example 5: Calculate discount

// function applyDiscount(price, discount = 10) {
//  return price -- (price * discount / 100);
// }
// console.log(applyDiscount(1000)); // 900 (10% off)
// console.log(applyDiscount(1000, 20)); // 800 (20% off)


// //Example 6: Array slice with defaults

// function getElements(arr, start = 0, end = arr.length) {
//  return arr.slice(start, end);
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(getElements(numbers)); // [1, 2, 3, 4, 5]
// console.log(getElements(numbers, 2)); // [3, 4, 5]
// console.log(getElements(numbers, 1, 3)); // [2, 3]


// //Example 7: Using expressions as defaults

// function multiply(a, b = a * 2) {
//  return a * b;
// }
// console.log(multiply(5)); // 50 (5 * 10)
// console.log(multiply(5, 3)); // 15 (5 * 3)


// //4. Spread Operator ( ... )

// //...iterableObject


// //5. Spread with Array Literals

// //Example 1: Copy an array

// //SPREAD OPERATOR
// //copy of an array
// let original = [1, 2, 3, 4];
// let copy = [...original];
// console.log(copy);

// // Merge two arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged);

// // Add elements while copying
// let numbers = [2, 3, 4];
// let expanded = [1, ...numbers, 5, 6];
// console.log(expanded); 

// // Combine multiple arrays
// let fruitsArr = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let dairy = ["milk", "cheese"];
// let groceries = [...fruitsArr, ...vegetables, ...dairy];
// console.log(groceries);

// // Spread string into array
// let word = "HELLO";
// let letters = [...word];
// console.log(letters);

// // Insert in middle
// let start = [1, 2];
// let end = [5, 6];
// let middle = [3, 4];
// let complete = [...start, ...middle, ...end];
// console.log(complete); 

// //Pass array elements as function arguments
// function sum(a, b, c) {
//   return a + b + c;
// }
// let numsSpread = [1, 2, 3];
// console.log(sum(...numsSpread));

// //Find max in array
// let numbers = [45, 78, 23, 89, 34];
// let max = Math.max(...numbers);
// console.log(max);


// //Spread with Object Literals
// let original = { name: "John", age: 25 };
// let copy = { ...original};
// console.log(copy);

// // Add new properties
// let user = { name: "Alice", age: 22 };
// let updatedUser = { ...user, city: "Mumbai" };
// console.log(updatedUser);

//  //Override properties
// let user3 = {
//   name: "Tony Stark",
//   email: "tony@stark.com",
//   age: 45
// };
// let updatedUser2 = {
//   ...user3,
//   email: "ironman@stark.com",
//   city: "New York"
// };
// console.log(updatedUser2);

// //Merge multiple objects
// let personal = { name: "Rahul", age: 25 };
// let contact = { email: "rahul@email.com", phone: "9876543210" };
// let address = { city: "Delhi", country: "India" };
// let complete = { ...personal, ...contact, ...address };
// console.log(complete);


// //Update nested object (shallow copy issue)
// let user = {
//  name: "John",
//  address: { city: "Mumbai", pin: 400001 }
// };
// let updated = { ...user, name: "Johnny" };
// console.log(updated);

// //Add computed properties
// let product = { name: "Laptop", price: 50000 };
// let withTax = {
//  ...product,
//  tax: product.price * 0.18,
//  total: product.price * 1.18
// };
// console.log(withTax);

// //Rest operator
// //Collect all arguments
// function sum(...numbers) {
//  return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3)); 
// console.log(sum(5, 10, 15, 20)); 
// console.log(sum(100, 200, 300, 400)); 

//  //First and rest
//  function announce(winner, ...others) {
//  console.log(`Winner: ${winner}`);
//  console.log(`Runners-up: ${others.join(", ")}`);
// }
// announce("Alice", "Bob", "Charlie", "David");
 
// //Multiple fixed parameters + rest
// function createTeam(captain, viceCaptain, ...players) {
//  return {
//  captain,
//  viceCaptain,
//  players
//  };
// }
// let team = createTeam("Virat", "Rohit", "Dhoni", "Hardik", "Bumrah");
// console.log(team);

// // Calculate average
//  function average(...numbers) {
//  let sum = numbers.reduce((total, num) => total + num, 0);
//  return sum / numbers.length;
// }
// console.log(average(10, 20, 30)); 
// console.log(average(85, 90, 78, 92)); 

// //Filter and collect
// function getEvens(...numbers) {
//  return numbers.filter(num => num % 2 === 0);
// }
// console.log(getEvens(1, 2, 3, 4, 5, 6, 7, 8));

// //Multiply all by a factor
// function multiplyAll(factor, ...numbers) {
//  return numbers.map(num => num * factor);
// }
// console.log(multiplyAll(2, 1, 2, 3, 4)); 
// console.log(multiplyAll(10, 5, 6, 7)); 

// //Combine first, last, and middle
// function describePodium(first, second, ...others) {
//  console.log(`Gold: ${first}`);
//  console.log(`Silver: ${second}`);
//  console.log(`Others: ${others.join(", ")}`);
// }
// describePodium("India", "Australia", "England", "Pakistan", "South Africa");

// //Spread vs Rest Comparison
// let arr = [1, 2, 3];
// console.log(...arr); 

// function collect(...items) {
//  console.log(items); 
// }
// collect(1, 2, 3);

// //Array Destructuring
// //Basic destructuring
// let colors = ["Red", "Green", "Blue"];
// let [first, second, third] = colors;
// console.log(first); 
// console.log(second); 
// console.log(third); 


// //Partial destructuring
// et numbers = [1, 2, 3, 4, 5];
// let [first, second] = numbers;
// console.log(first); 
// console.log(second); 

// // Skip elements
// et numbers = [10, 20, 30, 40, 50];
// let [first, , third, , fifth] = numbers;
// console.log(first); 
// console.log(third); 
// console.log(fifth); 

// //Swap variables
// et a = 5;
// let b = 10;
// [a, b] = [b, a]; 
// console.log(a); 
// console.log(b); 

// //With default values
// let [a = 1, b = 2, c = 3] = [10, 20];
// console.log(a); 
// console.log(b); 
// console.log(c); 

// //Rest in destructuring
// let numbers = [1, 2, 3, 4, 5];
// let [first, second, ...rest] = numbers;
// console.log(first); 
// console.log(second); 
// console.log(rest); 

// // Nested array destructuring
// let data = [1, [2, 3], 4];
// let [a, [b, c], d] = data;
// console.log(a); 
// console.log(b); 
// console.log(c); 
// console.log(d); 

// //Function return destructuring
// function getScores() {
//  return [95, 87, 92];
// }
// let [highest, middle, lowest] = getScores();
// console.log(highest); 
// console.log(middle); 
// console.log(lowest); 

// //Object Destructuring
// // Basic object destructuring
// let student = {
//  name: "Rahul",
//  age: 20,
//  grade: "A"
// };
// let { name, age, grade } = student;
// console.log(name); 
// console.log(age); 
// console.log(grade); 

// //Order doesn't matter
// let user = { name: "Alice", age: 25, city: "Mumbai" };
// let { city, name, age } = user;
// console.log(name); 
// console.log(age); 
// console.log(city); 

// //Renaming variables
// let user = {
//  username: "karan123",
//  email: "karan@email.com"
// };
// let { username: id, email: mail } = user;
// console.log(id); 
// console.log(mail); 

// //Default values
// let settings = { theme: "dark" };
// let { theme, language = "English", notifications = true } = settings;
// console.log(theme); 
// console.log(language); 
// console.log(notifications); 

// //Renaming + Default values
// let product = { name: "Laptop", price: 50000 };
// let { name: productName, price, discount = 0 } = product;
// console.log(productName); 
// console.log(price); 
// console.log(discount); 

// //Nested object destructuring
// let person = {
//  name: "John",
//  address: {
//  city: "Mumbai",
//  pin: 400001,
//  country: "India"
//  }
// };
// let { name, address: { city, pin } } = person;
// console.log(name); 
// console.log(city); 
// console.log(pin); 

// //Function parameter destructuring
// function displayUser({ name, age, city = "Unknown" }) {
//  console.log(`${name} is ${age} years old and lives in ${city}`);
// }
// displayUser({ name: "Priya", age: 22, city: "Delhi" });
// displayUser({ name: "Tom", age: 25 });

// //Rest with object destructuring
// let user = {
//  name: "Alice",
//  age: 25,
//  email: "alice@email.com",
//  phone: "9876543210",
//  city: "Mumbai"
// };
// let { name, age, ...otherDetails } = user;
// console.log(name); 
// console.log(age); 
// console.log(otherDetails);

// //Destructuring in loops
// let students = [
//  { name: "Rahul", marks: 85 },
//  { name: "Priya", marks: 92 },
//  { name: "Arjun", marks: 78 }
// ];
// students.forEach(({ name, marks }) => {
//  console.log(`${name} scored ${marks}`);
// });

// // API response destructuring
// let apiResponse = {
//  status: "success",
//  data: {
//  user: "john_doe",
//  posts: 150,
//  followers: 1200
//  },
//  timestamp: "2024-01-15"
// };
// let {
//  status,
//  data: { user, followers },
//  timestamp
// } = apiResponse;
// console.log(status); 
// console.log(user); 
// console.log(followers); 
// console.log(timestamp); 

// //Practice Problems

// //Problem 1 (reduce)
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let evenSum = numbers.reduce((sum, num) => {
//   if (num % 2 === 0) {          
//     return sum + num;           
//   }
//   return sum;                   
// }, 0);

// console.log(evenSum);        

// //Problem 2 (reduce - max)
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 30000 },
//   { name: "Tablet", price: 20000 }
// ];

// let expensiveProduct = products.reduce((max, product) => {
//   return product.price > max.price ? product : max;
// });

// console.log(expensiveProduct);

// //Problem 3 (Default Parameters)
// function calculateArea(length, width = length) {
//   return length * width;        
// }

// console.log(calculateArea(5));      
// console.log(calculateArea(5, 10));

// //Problem 4 (Spread - Arrays)
// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let dairy = ["milk", "cheese"];

// let groceries = [...fruits, ...vegetables, ...dairy];

// console.log(groceries);

// //Problem 5 (Spread - Objects)
// let user = {
//   name: "fatima",
//   email: "fatima@gmail.com"
// };

// let fullProfile = {
//   ...user,
//   age: 22,
//   city: "Hyderabad",
//   country: "India"
// };

// console.log(fullProfile);

// //Problem 6 (Rest)
// function findMax(...numbers) {
//   return numbers.reduce((max, num) => {
//     return num > max ? num : max;
//   });
// }

// console.log(findMax(10, 45, 23, 89, 34));

// //Problem 7 (Array Destructuring)
// let colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
// let [first, , third, , last] = colors;

// console.log(first);   
// console.log(third);   
// console.log(last); 

// //Problem 8 (Object Destructuring)
// let book = {
//   title: "Atomic Habits",
//   author: "James Clear",
//   year: 2018,
//   pages: 320
// };

// let { title, author: writtenBy } = book;

// console.log(title);       
// console.log(writtenBy); 

// //Problem 9 (Combining Concepts)
// let students = [
//   { name: "Rahul", marks: 85 },
//   { name: "Priya", marks: 92 },
//   { name: "Arjun", marks: 78 },
//   { name: "Neha", marks: 88 }
// ];

// let names = students.map(student => student.name);
// let [firstName, secondName, thirdName] = names;

// console.log(firstName);   
// console.log(secondName);  
// console.log(thirdName);   

// //Problem 10 (Advanced)
// function displayStudent({ name, marks, email = "Not Given" }) {
//   console.log(name);
//   console.log(marks);
//   console.log(email);
// }

// displayStudent({
//   name: "fatima",
//   marks: 90
// });


// //Array Methods
// array.reduce((acc, curr) => acc + curr, 0);

// //ES6 Features
// // Default Parameters

// function greet(name = "Guest") {}

// let copy = [...array];
// let merged = {...obj1, ...obj2};

// function sum(...numbers) {}

// let [a, b] = array;
// let {name, age} = object;



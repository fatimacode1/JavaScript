// //Basic Object Literals
// let car = {
//   brand: "Tesla",
//   model: "Model 3",
//   year: 2024,
//   color: "white"
// };
// console.log(car.brand, car.year);

// let movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
//   rating: 8.8
// };
// console.log(movie["director"], movie.rating);

// //Modifying Objects
// let student = {
//   name: "John",
//   age: 20,
//   grade: "B"
// };
// student.grade = "A";
// student.city = "Mumbai";
// delete student.age;
// console.log(student);

// let product = {
//   name: "Laptop",
//   price: 50000
// };
// product.price = 45000;
// product.brand = "Dell";
// product.inStock = true;
// console.log(product);

// //Nested Objects
// let classroom = {
//   teacher: { name: "Ms. Smith", subject: "Math" },
//   student1: { name: "Alice", grade: "A" },
//   student2: { name: "Bob", grade: "B+" }
// };
// console.log(classroom.teacher.name);
// console.log(classroom.student1.grade);
// console.log(classroom.student2.name);

// let company = {
//   engineering: { employees: 40, manager: "John" },
//   sales: { employees: 25, manager: "Sarah" }
// };
// console.log(company.engineering.employees);
// console.log(company.sales.manager);
// company.engineering.employees = 45;
// console.log(company.engineering.employees);

// //Array of Objects
// let studentsArr = [
//   { name: "Emma", age: 20, grade: "A" },
//   { name: "Liam", age: 21, grade: "B" },
//   { name: "Olivia", age: 19, grade: "A+" }
// ];
// console.log(studentsArr[0].name);
// console.log(studentsArr[2].grade);
// console.log(studentsArr.length);

// let productsArr = [
//   { id: 101, name: "Phone", price: 30000 },
//   { id: 102, name: "Laptop", price: 55000 },
//   { id: 103, name: "Tablet", price: 20000 }
// ];
// console.log(productsArr[1].name);
// console.log(productsArr[0].price);
// productsArr.push({ id: 104, name: "Smartwatch", price: 15000 });
// console.log(productsArr.length);

// //Complex Array of Objects
// let posts = [
//   { username: "tech_guru", content: "Learning JavaScript!", likes: 150 },
//   { username: "code_ninja", content: "Arrays are awesome", likes: 200 }
// ];
// console.log(posts[0].content);
// console.log(posts[1].likes);
// posts[0].likes = 175;
// console.log(posts[0].likes);

// let courses = [
//   { name: "JavaScript", duration: 40, instructor: "John" },
//   { name: "Python", duration: 35, instructor: "Sarah" },
//   { name: "React", duration: 30, instructor: "Mike" }
// ];
// console.log(courses[1].instructor);
// console.log(courses[0].duration);
// courses[2].duration = 32;
// console.log(courses[0].name);
// console.log(courses[1].name);
// console.log(courses[2].name);

// //Math Object Basics
// console.log(Math.PI);
// console.log(Math.pow(2, 5));
// console.log(Math.abs(-25));

// console.log(Math.floor(7.8));
// console.log(Math.ceil(7.2));
// console.log(Math.pow(3, 4));
// console.log(Math.abs(-100));

// //Math.random()
// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.random() * 100);

// let r = Math.random();
// console.log(r);
// console.log(r * 5);
// console.log(r * 20);

// //Random Integers (1–10)
// let step1 = Math.random();
// let step2 = step1 * 10;
// let step3 = Math.floor(step2);
// let step4 = step3 + 1;
// console.log(step1, step2, step3, step4);

// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// //Random Ranges
// console.log(Math.floor(Math.random() * 100) + 1);
// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.floor(Math.random() * 5) + 1);

// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.floor(Math.random() * 7) + 1);
// console.log(Math.floor(Math.random() * 12) + 1);
// console.log(Math.floor(Math.random() * (25 - 18 + 1)) + 18);

// // Random Formula Practice
// console.log(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
// console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
// console.log(Math.floor(Math.random() * 1000) + 1);

// console.log(Math.floor(Math.random() * 101));
// console.log(Math.floor(Math.random() * (40 - (-10) + 1)) - 10);
// console.log(Math.floor(Math.random() * (500 - 100 + 1)) + 100);

// // Practical Random Applications
// let colors = ["red", "green", "blue", "yellow", "purple"];
// let colorIndex = Math.floor(Math.random() * colors.length);
// console.log(colors[colorIndex]);

// let foods = ["Pizza", "Burger", "Pasta", "Sushi"];
// let foodIndex = Math.floor(Math.random() * foods.length);
// console.log("Today's special: " + foods[foodIndex]);

// let favs = ["Music", "Coding", "Travel", "Coffee", "Art"];
// let favIndex = Math.floor(Math.random() * favs.length);
// console.log(favs[favIndex]);

// //  Objects + Random
// let players = [
//   { name: "Alice", score: 0 },
//   { name: "Bob", score: 0 },
//   { name: "Charlie", score: 0 }
// ];
// players[0].score = Math.floor(Math.random() * 6) + 1;
// players[1].score = Math.floor(Math.random() * 6) + 1;
// players[2].score = Math.floor(Math.random() * 6) + 1;
// console.log(players);

// let productsDiscount = [
//   { name: "Phone", price: 20000, discount: 0 },
//   { name: "Laptop", price: 50000, discount: 0 }
// ];
// productsDiscount[0].discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
// productsDiscount[1].discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
// console.log(productsDiscount);

// // Nested Objects with Random
// let game = {
//   player1: { name: "Alice", health: 100, damage: 0 },
//   player2: { name: "Bob", health: 100, damage: 0 }
// };
// game.player1.damage = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
// game.player2.damage = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
// console.log(game);

// let weather = {
//   monday: { temp: 0, humidity: 0 },
//   tuesday: { temp: 0, humidity: 0 }
// };
// weather.monday.temp = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
// weather.monday.humidity = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
// weather.tuesday.temp = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
// weather.tuesday.humidity = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
// console.log(weather);

// // Complex Challenge
// let studentsDB = [
//   { name: "Emma", math: 0, science: 0 },
//   { name: "Liam", math: 0, science: 0 },
//   { name: "Olivia", math: 0, science: 0 }
// ];
// studentsDB.forEach(s => {
//   s.math = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
//   s.science = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
// });
// console.log(studentsDB);

// let tickets = [];
// for (let i = 0; i < 5; i++) {
//   tickets.push(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
// }
// console.log(tickets);
// let winningNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
// console.log(winningNumber);
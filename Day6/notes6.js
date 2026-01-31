// //Object Literals & Math Object
// //Example 1. simple student object
// let student = {
//     name:"Alice",
//     age:20,
//     grade:"A"
// };

// //Example 2: Product object
// let product ={
//     title:"Laptop",
//     price:45000,
//     inStock:true
// };

// //Example Geographic location
// let location ={
//     latitude:"28.7041"
// }

// let student = {
//   name: "Alice",
//   age: 20,
//   grade: "A"
// };

// let product = {
//   title: "Laptop",
//   price: 45000,
//   inStock: true
// };

// let location = {
//   latitude: "28.7041° N",
//   longitude: "77.1025° E",
//   city: "Delhi"
// };

// let book = {
//   title: "JavaScript Guide",
//   author: "John Doe",
//   pages: 350,
//   published: 2024
// };

// let post = {
//   username: "coder_dev",
//   content: "Learning JavaScript!",
//   likes: 150,
//   comments: 23
// };

// let student2 = { name: "Alex", age: 21, city: "Seattle" };

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2["city"]);

// let person = { "first name": "John", "last name": "Doe" };
// console.log(person["first name"]);

// let key = "age";
// console.log(student2[key]);

// let car = { brand: "Toyota", model: "Camry", year: 2024 };
// console.log(car.brand);
// console.log(car["model"]);

// student2.age = 22;
// student2.city = "Boston";
// student2.grade = "A+";
// student2.major = "Computer Science";
// delete student2.city;
// console.log(student2);

// let product2 = { name: "Phone", price: 30000 };
// product2.price = 28000;
// product2.brand = "Samsung";
// delete product2.name;
// console.log(product2);

// let car2 = { brand: "Honda" };
// car2["model"] = "Civic";
// car2["year"] = 2024;
// console.log(car2);

// let userDatabase = {
//   user1: { name: "Alice", grade: "A+", city: "Austin" },
//   user2: { name: "Bob", grade: "B", city: "Denver" }
// };

// console.log(userDatabase.user1.name);
// console.log(userDatabase.user2.grade);

// let company = {
//   engineering: { employees: 50, manager: "John" },
//   sales: { employees: 30, manager: "Sarah" },
//   hr: { employees: 10, manager: "Mike" }
// };

// console.log(company.engineering.employees);
// console.log(company.sales.manager);

// let studentsRecord = {
//   student1: { name: "Emma", math: 85, science: 90 },
//   student2: { name: "Oliver", math: 78, science: 88 }
// };

// console.log(studentsRecord.student1.math);
// console.log(studentsRecord.student2.science);

// let inventory = {
//   electronics: { laptops: 25, phones: 50 },
//   clothing: { shirts: 100, pants: 75 }
// };

// console.log(inventory.electronics.laptops);
// console.log(inventory.clothing.shirts);

// let school = {
//   classA: { students: 30, teacher: "Ms. Smith" },
//   classB: { students: 28, teacher: "Mr. Brown" }
// };

// school.classA.students = 32;
// school.classB.teacher = "Ms. Johnson";
// console.log(school.classA.students);
// console.log(school.classB.teacher);

// let studentsArr = [
//   { name: "Alice", age: 20, grade: "A" },
//   { name: "Bob", age: 21, grade: "B" },
//   { name: "Charlie", age: 19, grade: "A+" }
// ];

// console.log(studentsArr[0].name);
// console.log(studentsArr[1].grade);
// console.log(studentsArr.length);

// let products = [
//   { id: 101, name: "Laptop", price: 45000 },
//   { id: 102, name: "Mouse", price: 500 },
//   { id: 103, name: "Keyboard", price: 1500 }
// ];

// console.log(products[0].name);
// console.log(products[2].price);

// let posts = [
//   { username: "user1", content: "Hello World!", likes: 50 },
//   { username: "user2", content: "JavaScript is fun", likes: 120 },
//   { username: "user3", content: "Coding daily", likes: 85 }
// ];

// console.log(posts[1].username);
// console.log(posts[0].likes);

// let courses = [
//   { name: "Math", id: 101, credits: 3 },
//   { name: "Physics", id: 102, credits: 4 },
//   { name: "Chemistry", id: 103, credits: 3 }
// ];

// console.log(courses[0].credits);
// console.log(courses[1].name);

// let cars = [
//   { brand: "Toyota", model: "Camry", year: 2020 },
//   { brand: "Honda", model: "Civic", year: 2021 }
// ];

// cars[0].year = 2024;
// cars.push({ brand: "Ford", model: "Mustang", year: 2023 });
// console.log(cars[0].year);
// console.log(cars[2].brand);


// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.abs(-42));
// console.log(Math.abs(15));
// console.log(Math.abs(-7.5));

// console.log(Math.pow(2, 3));
// console.log(Math.pow(5, 2));
// console.log(Math.pow(10, 3));

// console.log(Math.floor(4.9));
// console.log(Math.floor(4.1));
// console.log(Math.ceil(4.1));
// console.log(Math.ceil(4.9));

// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;
// console.log(circumference);
// console.log(area);

// console.log(Math.random());

// let num = Math.random() * 10;
// console.log(num);

// let percentageRand = Math.random() * 100;
// console.log(percentageRand);

// console.log(Math.random() * 5);
// console.log(Math.random() * 20);
// console.log(Math.random() * 50);

// let random1to10 = Math.floor(Math.random() * 10) + 1;
// console.log(random1to10);

// let random1to100 = Math.floor(Math.random() * 100) + 1;
// console.log(random1to100);

// let diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log(diceRoll);

// let rating = Math.floor(Math.random() * 5) + 1;
// console.log(rating);

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log("You rolled: " + dice);

// let colors = ["red", "green", "blue", "yellow"];
// let randomIndex = Math.floor(Math.random() * colors.length);
// console.log("Random color: " + colors[randomIndex]);

// let questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
// let randomQ = Math.floor(Math.random() * questions.length);
// console.log("Random question: " + questions[randomQ]);

// let id = Math.floor(Math.random() * 9000) + 1000;
// console.log("Generated ID: " + id);

// let percentageFinal = Math.floor(Math.random() * 101);
// console.log("Random percentage: " + percentageFinal + "%");
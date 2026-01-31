//section 1: string methods
//question 1: clean user input
// let userInput = " HeLLo JaVaScRiPt ";
// let cleanInput = userInput.trim().toLowerCase();
// console.log(userInput);
// console.log(cleanInput);
// //output
// // HeLLo JaVaScRiPt 
// // hello javascript


// //section 1: string methods
// //question 2: format email
// let email = " USER@EXAMPLE.COM ";
// let formattedEmail = email.trim().toLowerCase();
// console.log(formattedEmail);
// //output
// // user@example.com


// //section 2: indexOf
// //question 1: find words
// let sentence = "JavaScript is awesome and JavaScript is fun";
// console.log(sentence.indexOf("awesome"));
// console.log(sentence.indexOf("JavaScript"));
// console.log(sentence.indexOf("Python"));
// //output
// // 14
// // 0
// // -1


// //section 2: indexOf
// //question 2: check existence
// let message = "Welcome to coding class";
// if (message.indexOf("coding") !== -1) {
//   console.log("Found coding!");
// } else {
//   console.log("Coding not found");
// }
// //output
// // Found coding!


// //section 3: method chaining
// //question 1: process raw data
// let rawData = " MESSY iNpuT ";
// let processedData = rawData.trim().toLowerCase();
// console.log(rawData);
// console.log(processedData);
// //output
// //  MESSY iNpuT 
// // messy input


// //section 3: method chaining
// //question 2: secure password
// let password = " MyP@ssw0rd123 ";
// let securePassword = password.trim().toUpperCase().slice(0, 8);
// console.log(securePassword);
// //output
// // MYP@SSW0


// //section 4: string slicing
// //question 1: extract names
// let fullName = "Alexander Hamilton";
// let firstName = fullName.slice(0, 9);
// let lastName = fullName.slice(10);
// console.log(firstName);
// console.log(lastName);
// //output
// // Alexander
// // Hamilton


// //section 4: string slicing
// //question 2: phone number
// let phone = "9876543210";
// let areaCode = phone.slice(0, 3);
// let lastFour = phone.slice(-4);
// console.log("Area code:", areaCode, "Last four:", lastFour);
// //output
// // Area code: 987 Last four: 3210


// //section 5: replace
// //question 1: replace day
// let announcement = "The event will happen on Monday and Monday only";
// let updatedAnnouncement = announcement.replace("Monday", "Friday");
// console.log(announcement);
// console.log(updatedAnnouncement);
// //output
// // The event will happen on Monday and Monday only
// // The event will happen on Friday and Monday only


// //section 5: replace
// //question 2: template replace
// let template = "Hello NAME, welcome to our website";
// let personalizedMessage = template.replace("NAME", "Alice");
// console.log(personalizedMessage);
// //output
// // Hello Alice, welcome to our website


// //section 6: basic arrays
// //question 1: colors array
// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors);
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// console.log(colors.length);
// //output
// // [ 'red', 'green', 'blue', 'yellow' ]
// // red
// // yellow
// // 4


// //section 6: basic arrays
// //question 2: scores array
// let scoresArr = [85, 92, 78, 90, 88];
// console.log(scoresArr[2]);
// scoresArr[0] = 95;
// console.log(scoresArr);
// console.log(scoresArr[0] + scoresArr[1]);
// //output
// // 78
// // [95, 92, 78, 90, 88]
// // 187


// //section 7: array methods
// //question 1: playlist
// let playlist = [];
// playlist.push("Song1");
// playlist.push("Song2");
// let removedSong = playlist.pop();
// playlist.unshift("Song0");
// console.log(playlist);
// console.log(removedSong);
// //output
// // [ 'Song0', 'Song1' ]
// // Song2


// //section 7: array methods
// //question 2: queue
// let queue = ["First", "Second", "Third"];
// let served1 = queue.shift();
// queue.push("Fourth");
// let served2 = queue.shift();
// console.log(queue);
// console.log(served1, served2);
// //output
// // [ 'Third', 'Fourth' ]
// // First Second


// //section 8: search methods
// //question 1: fruits
// let fruits = ["apple", "banana", "mango", "orange", "banana"];
// console.log(fruits.indexOf("mango"));
// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("grape"));
// //output
// // 2
// // 1
// // -1


// //section 8: search methods
// //question 2: inventory
// let inventory = ["laptop", "mouse", "keyboard", "monitor"];
// console.log(inventory.includes("mouse") ? "Mouse is available" : "Mouse not available");
// console.log(inventory.includes("printer") ? "Printer is available" : "Printer is not available");
// //output
// // Mouse is available
// // Printer is not available


// //section 9: concat and reverse
// //question 1: schedule
// let morningClasses = ["Math", "English", "Science"];
// let afternoonClasses = ["History", "Art", "PE"];
// let fullSchedule = morningClasses.concat(afternoonClasses);
// console.log(fullSchedule);
// console.log(fullSchedule.length);
// //output
// // [ 'Math', 'English', 'Science', 'History', 'Art', 'PE' ]
// // 6


// //section 9: concat and reverse
// //question 2: reverse numbers
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);
// //output
// // [5, 4, 3, 2, 1]


// //section 10: splice
// //question 1: months
// let months = ["Jan", "Feb", "Mar", "May", "Jun"];
// months.splice(3, 0, "Apr");
// console.log(months);
// //output
// // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]


// //section 10: splice
// //question 2: students
// let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
// students.splice(2, 1, "Frank", "Grace");
// console.log(students);
// //output
// // [ 'Alice', 'Bob', 'Frank', 'Grace', 'David', 'Eve' ]


// //section 11: array reference
// //question 1: reference behavior
// let original = [1, 2, 3];
// let reference = original;
// reference[0] = 99;
// console.log(original);
// console.log(reference);
// //output
// // [99, 2, 3]
// // [99, 2, 3]


// //section 11: array reference
// //question 2: compare arrays
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 == arr2);
// console.log(arr1 === arr2);
// //output
// // false
// // false


// //section 12: nested arrays
// //question 1: tic tac toe
// let board = [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["X", "O", "X"]
// ];
// console.log(board[0][1]);
// console.log(board[2][2]);
// board[1][1] = "O";
// console.log(board);
// //output
// // O
// // X
// // updated board


// //section 12: nested arrays
// //question 2: student scores
// let scores = [
//   ["Alice", 85, 90, 92],
//   ["Bob", 78, 85, 88],
//   ["Charlie", 92, 88, 95]
// ];
// console.log(scores[0][2]);
// console.log(scores[2][0]);
// let bobAvg = (scores[1][1] + scores[1][2] + scores[1][3]) / 3;
// console.log(bobAvg);
// scores[1][1] = 82;
// console.log(scores);
// //output
// // 90
// // Charlie
// // 83.666...
// // updated scores

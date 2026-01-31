// 1.Introduction to Methods 
// //Example 1: Using console.log() menthod 
// console.log("Hello World");

// //Example 2: Usimg alert() method
// alert("Welcome to javaScript!");

// //Example 3: CAlling methods on strings
// let text = "JavaScript";
// text.toUpperCase();

// //Example 4: Methods can return values
// let message = "hello";
// let cleaned = message.trim();
// console.log(cleaned); //"hello"

// //Example 5: Some methods take arguments
// let word = "Mountains";
// word,slice(0,5); //"Mount"

// //Trim Methods

// // Removing spaces from username
// let username = " coding_wizard ";
// let cleanUser = username.trim();
// console.log(cleanUser); // "coding_wizard"

// // Trimming email input
// let email = " user@example.com ";
// let cleanEmail = email.trim();
// console.log(cleanEmail); // "user@example.com"

// // Middle spaces are not removed
// let text2 = " hello world ";
// console.log(text2.trim()); // "hello world"

// // Original string does not change
// let original = " test ";
// let trimmed = original.trim();
// console.log(original); // " test "
// console.log(trimmed);  // "test"

// // Trimming empty spaces
// let input = " ";
// console.log(input.trim()); // ""


// //String Immuntability

// // Strings cannot be changed directly
// let greeting = "hello";
// greeting.toUpperCase();
// console.log(greeting); // still "hello"

// // Store returned value
// let msg = "javascript";
// let upper = msg.toUpperCase();
// console.log(msg);   // "javascript"
// console.log(upper); // "JAVASCRIPT"

// // Cannot change characters directly
// let animal = "cat";
// animal[0] = "b";
// console.log(animal); // "cat"

// // Multiple methods create new strings
// let text3 = " HELLO ";
// let result = text3.trim().toLowerCase();
// console.log(text3);  // " HELLO "
// console.log(result); // "hello"

// // Concatenation creates new string
// let first = "Hello";
// let second = " World";
// let combined = first + second;
// console.log(first);    // "Hello"
// console.log(combined); // "Hello World"


// //case conversion

// let msg1 = "JavaScript is Fun";
// console.log(msg1.toUpperCase());

// let shout = "STOP YELLING";
// console.log(shout.toLowerCase());

// // Case-insensitive comparison
// let userInput = "YeS";
// if (userInput.toLowerCase() === "yes") {
//   console.log("User agreed!");
// }

// let mixed = "HeLLo WoRLd";
// console.log(mixed.toLowerCase());
// console.log(mixed.toUpperCase());

// // Emails usually converted to lowercase
// let email2 = "User@EXAMPLE.COM";
// console.log(email2.toLowerCase());


// //indexof() method

// let str = "Hello World";
// console.log(str.indexOf("W")); // 6
// console.log(str.indexOf("o")); // 4

// let sentence = "I love JavaScript";
// console.log(sentence.indexOf("love")); // 2
// console.log(sentence.indexOf("Java")); // 7

// // Character not found
// console.log(str.indexOf("z")); // -1

// // Case sensitive
// let lang = "JavaScript";
// console.log(lang.indexOf("java")); // -1
// console.log(lang.indexOf("Java")); // 0

// // Checking if word exists
// let message2 = "Welcome to coding";
// if (message2.indexOf("coding") !== -1) {
//   console.log("Found the word coding!");
// }


// //Methods Chaining

// // trim → uppercase
// let msg2 = " hello ";
// let result2 = msg2.trim().toUpperCase();
// console.log(result2);

// // trim → lowercase → slice
// let input2 = " JAVASCRIPT ";
// let clean2 = input2.trim().toLowerCase().slice(0, 4);
// console.log(clean2); // "java"

// // Cleaning username
// let username2 = " UserName123 ";
// let processed = username2.trim().toLowerCase();
// console.log(processed);

// // Multiple methods together
// let text4 = " Hello World ";
// let output = text4.trim().toUpperCase().replace("HELLO", "HI");
// console.log(output);

// // Order matters
// let word2 = "javascript";
// console.log(word2.slice(0, 4).toUpperCase());
// console.log(word2.toUpperCase().slice(0, 4));


// //Slice Methods

// let mountain = "Mountains";
// console.log(mountain.slice(0, 5)); // "Mount"
// console.log(mountain.slice(5));    // "ains"

// let text5 = "JavaScript";
// console.log(text5.slice(4, 10)); // "Script"

// let msg3 = "Hello World";
// console.log(msg3.slice(6)); // "World"

// // Negative index
// console.log(text5.slice(-6)); // "Script"
// console.log(text5.slice(0, -6)); // "Java"

// // First and last character
// let name = "Alexander";
// console.log(name.slice(0, 1));
// console.log(name.slice(-1));


// // Replace Methods

// let fruitText = "I love apple pie";
// console.log(fruitText.replace("apple", "cherry"));

// let text6 = "I love apple pie and apple juice";
// console.log(text6.replace("apple", "orange"));

// let message3 = "Hello hello HELLO";
// console.log(message3.replace("hello", "hi"));

// let sentence2 = "Hello World";
// console.log(sentence2.replace(" ", "-"));

// // Chaining replace
// let str2 = " javascript ";
// let result3 = str2.trim().replace("java", "type");
// console.log(result3);


// //Arrays

// let colors = ["red", "green", "blue"];
// console.log(colors);

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]);
// console.log(fruits[2]);

// let mixedArr = ["hello", 42, true, 3.14];
// console.log(mixedArr[1]);
// console.log(mixedArr[3]);

// let numbers = [10, 20, 30, 40];
// console.log(numbers.length);

// let items = ["first", "second", "third", "fourth"];
// let lastIndex = items.length - 1;
// console.log(items[lastIndex]);


// // Array mutabality

// let fruits2 = ["mango", "apple", "litchi"];
// fruits2[0] = "banana";
// console.log(fruits2);

// let numbers2 = [1, 2, 3, 4];
// numbers2[0] = 10;
// numbers2[3] = 40;
// console.log(numbers2);

// let colors2 = ["red", "green", "blue"];
// colors2[colors2.length - 1] = "yellow";
// console.log(colors2);

// // Arrays are mutable
// let arr = ["a", "b", "c"];
// arr[0] = "z";
// console.log(arr);

// // Strings are immutable
// let str3 = "abc";
// str3[0] = "z";
// console.log(str3);

// // Conditional update
// let scores = [85, 90, 75, 88];
// if (scores[2] < 80) {
//   scores[2] = 80;
// }
// console.log(scores);


// //push pop shift unshift

// let fruits3 = ["apple", "banana"];
// fruits3.push("mango");
// console.log(fruits3);

// let colors3 = ["red", "green", "blue"];
// let removed = colors3.pop();
// console.log(removed);
// console.log(colors3);

// let nums = [2, 3, 4];
// nums.unshift(1);
// console.log(nums);

// let items2 = ["first", "second", "third"];
// let firstItem = items2.shift();
// console.log(firstItem);
// console.log(items2);


// // Srearch and Merge

// let fruits4 = ["apple", "banana", "mango"];
// console.log(fruits4.indexOf("banana"));
// console.log(fruits4.indexOf("grape"));

// let colors4 = ["red", "green", "blue"];
// console.log(colors4.includes("green"));
// console.log(colors4.includes("yellow"));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combinedArr = arr1.concat(arr2);
// console.log(combinedArr);

// let nums2 = [1, 2, 3, 4, 5];
// nums2.reverse();
// console.log(nums2);


// //Splice

// let months = ["Jan", "March", "April"];
// months.splice(1, 0, "Feb");
// console.log(months);

// let colors5 = ["red", "green", "blue", "yellow"];
// colors5.splice(2, 1);
// console.log(colors5);

// let fruits5 = ["apple", "banana", "mango"];
// fruits5.splice(1, 1, "orange");
// console.log(fruits5);

// let numbers4 = [1, 2, 5, 6];
// numbers4.splice(2, 0, 3, 4);
// console.log(numbers4);

// let items3 = ["a", "b", "c", "d", "e"];
// items3.splice(1, 3);
// console.log(items3);


// // Array References
// console.log([1, 2] == [1, 2]);
// console.log([1, 2] === [1, 2]);

// let ref1 = [1, 2, 3];
// let ref2 = ref1;
// ref2[0] = 99;
// console.log(ref1);
// console.log(ref2);

// let a = [1, 2, 3];
// let b = a;
// console.log(a === b);

// let c = [1, 2, 3];
// console.log(a === c);


// //Nested Arrays

// let grid = [[1, 2], [3, 4]];
// console.log(grid[0]);
// console.log(grid[0][1]);

// let board = [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["O", "X", "X"]
// ];
// console.log(board[0][0]);
// console.log(board[2][2]);

// let grades = [
//   ["Alice", 85, 90, 92],
//   ["Bob", 78, 88, 84],
//   ["Charlie", 92, 95, 88]
// ];
// console.log(grades[0][0]);
// console.log(grades[1][2]);

// let matrix = [[1, 2], [3, 4]];
// matrix[0][1] = 20;
// console.log(matrix);

// let data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(data[1][1]);
// console.log(data[2][0]);
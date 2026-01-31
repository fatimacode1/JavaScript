// Day 9.2: Advanced Array Methods & ES6 Features

//The reduce Method

/* let result = array.reduce((accumulator, currentElement) => {
    //return updated accumulator
    // }, initiaLValue);*/

//Example 1: Sum of all numbers

// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);
// console.log(sum); //15

//Step-by-step execution:
//total = 0, num = 1 -> return 0 + 1 = 1
//total = 1, num = 2 -> return 1 + 2 = 3
//total = 3, num = 3 -> return 3 + 3 = 6
//total = 6, num = 4 -> return 6 + 4; 10
//total = 10, num = 5 -> return 10 + 5 = 15

//Example 2: Product of all numbers

// let numbers = [2,3,4,5];

// let product = numbers.reduce((result, num) => result * num, 1);
// console.log(product); //120 (2 * 3 * 4 * 5)

//Example 3: Calculate total price

// let cart = [
//   { item: "Shirt", price: 500 },
//   { item: "Shoes", price: 1200 },
//   { item: "Hat", price: 300 },
// ];

// let total = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(total); //2000

//Example 4: Count occurrences

// let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];

// let count = fruits.reduce((counter, fruit) => {
//     counter[fruit] = (counter[fruit] || 0) + 1;
//     return counter;
// }, {});
// console.log(count);


//Example 5: Flatten nested arrays

// let nested = [[1,2], [3,4], [5,6]];
// let flat = nested.reduce((acc, arr) => acc.concat(arr),[]);
// console.log(flat); //[1,2,3,4,5,6]


//Example 6: Find longest word

// let words = ["hi", "hello", "hey", "goodbye"];
// let longest = words.reduce((longest, word) => {
//     return word.length > longest.length ? word : longest;
// },"");
// console.log(longest); //"goodbye"

//Example 7: Group by category
let items = [
    {name: "Apple", type: "fruit"},
    {name: "Carrot", type: "vegetable"},
    {name: "Banana", type: "fruit"},
    {name: "Potato"}
];

let grouped = items.reduce((result, item) => {
  const type = item.type ?? "others";   // if no type -> "others"

  if (!result[type]) result[type] = [];
  result[type].push(item.name);

  return result;
}, {});


// let grouped = items.reduce((result, item) => {
//     if (!result[item.type]) {
//         result[item.type] = [] ;
//     }
//     result[item.type].push(item.name);
//     return result;
// }, {});
console.log(grouped);

//{fruit: ["Apple", "Banana"], vegetable:["Carrot", "Potato"]}

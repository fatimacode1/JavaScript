//Day - 12: DOM Events

//addEventListener()
// element.addEventListener(eventType, callbackFunction);

//Example 1: Basic Button Click
// let btn = document.querySelector("button");

// btn.addEventListener("click",function() {
// console.log("Button was clicked!");
// alert("You clicked me!");
// });

//Example 2: Multiple Listeners on Same Element
// let button = document.querySelector("#myBtn");

// //First Listener
// button.addEventListener("click", function() {
//     console.log("First action");
// });

// //Second listener (doesn't overwrite the first)
// button.addEventListener("click", function() {
//     console.log("Second action");
// });

//Example 3: Paragraph Click Counter
// let para = document.querySelector("p");
// let count = 0;

// para.addEventListener("click", function(){
//     count++;
//     para.innerText = `You clicked me ${count} times!`;
// });

//Example 1: Hover Color Change
// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function() {
//     box.style.backgroundColor = "yellow";
//     console.log("Mouse entered!");
// });

// box.addEventListener("mouseleave", function(){
//     box.style.backgroundColor = "white";
//     console.log("Mouse left!");
// });

//Example 2: Click to Toggle Visibility
// let hideBtn = document.querySelector("#hideBtn");
// let content = document.querySelector("#content");

// hideBtn.addEventListener("click", function () {
//   if (content.style.display === "none") {
//     content.style.display = "block";
//     hideBtn.innerText = "Hide";
//   } else {
//     content.style.display = "none";
//     hideBtn.innerText = "Show";
//   }
// });

//Example 3: Double Click to Edit
// let heading = document.querySelector("h1");

// heading.addEventListener("dblclick", function(){
//     heading.innerText = "You double-clicked me!";
//     heading.style.color = "red";
// });

//Example 4: Interactive Card Hover
// let card = document.querySelector(".card");

// card.addEventListener("mouseenter", function() {
//     card.style.transform = "scale(1.1)";
//     card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
// });

// card.addEventListener("mouseleave", function() {
//     card.style.transform = "scale(1)";
//     card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });

//Example 1: Universal Color Changer
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");


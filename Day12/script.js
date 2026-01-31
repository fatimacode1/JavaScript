// //1
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   alert("You clicked me!");
// });

// //2

// let myBtn = document.querySelector("#myBtn");

// myBtn.addEventListener("click", function () {
//   console.log("First action");
// });

// myBtn.addEventListener("click", function () {
//   console.log("Second action");
// });

// //3

// let para = document.querySelector("p");
// let count = 0;

// para.addEventListener("click", function () {
//   count++;
//   para.innerText = `You clicked me ${count} times!`;
// });

// //1

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function () {
//   box.style.backgroundColor = "yellow";
//   console.log("Mouse entered!");
// });

// box.addEventListener("mouseleave", function () {
//   box.style.backgroundColor = "white";
//   console.log("Mouse left!");
// });

// //2

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

// //3

// let heading = document.querySelector("h1");

// heading.addEventListener("dblclick", function () {
//   heading.innerText = "You double-clicked me!";
//   heading.style.color = "red";
// });

// //4

// let card = document.querySelector(".card");

// card.addEventListener("mouseenter", function () {
//   card.style.transform = "scale(1.1)";
//   card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
// });

// card.addEventListener("mouseleave", function () {
//   card.style.transform = "scale(1)";
//   card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });

// //1

// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let btn2 = document.querySelector("button");

// function changeColor() {
//   this.style.backgroundColor = "lightblue";
//   console.log(this.innerText + " was clicked!");
// }

// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// btn2.addEventListener("click", changeColor);

// //2

// let boxes = document.querySelectorAll(".box");

// function toggleActive() {
//   this.classList.toggle("active");
// }

// for (let box of boxes) {
//   box.addEventListener("click", toggleActive);
// }

// //3
// let deleteButtons = document.querySelectorAll(".delete-btn");

// function removeItem() {
//   this.parentElement.remove();
//   console.log("Item deleted!");
// }

// for (let btn of deleteButtons) {
//   btn.addEventListener("click", removeItem);
// }

// //4
// let menuItems = document.querySelectorAll(".menu-item");
// function highlight() {
 
//  for (let item of menuItems) {
//  item.style.fontWeight = "normal";

//  this.style.fontWeight = "bold";
// }
// for (let item of menuItems) {
//  item.addEventListener("click", highlight);
// }

// //1

// let input = document.querySelector("input");

// input.addEventListener("keydown", function (event) {
//   console.log("Key:", event.key);
//   console.log("Code:", event.code);
// });

// //2

// let player = document.querySelector("#player");

// document.addEventListener("keydown", function (event) {
//   if (event.code === "ArrowUp") {
//     player.style.top = (parseInt(player.style.top) - 10) + "px";
//   } else if (event.code === "ArrowDown") {
//     player.style.top = (parseInt(player.style.top) + 10) + "px";
//   } else if (event.code === "ArrowLeft") {
//     player.style.left = (parseInt(player.style.left) - 10) + "px";
//   } else if (event.code === "ArrowRight") {
//     player.style.left = (parseInt(player.style.left) + 10) + "px";
//   }
// });

// //3

// let searchBox = document.querySelector("#search");

// searchBox.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     alert("You searched for: " + searchBox.value);
//   }
// });

// //4

// document.addEventListener("keydown", function (event) {
//   if (event.ctrlKey && event.key === "s") {
//     event.preventDefault();
//     alert("Content saved!");
//   }
// });

// //5

// let textarea = document.querySelector("textarea");
// let counter = document.querySelector("#counter");

// textarea.addEventListener("keyup", function () {
//   let length = textarea.value.length;
//   counter.innerText = length + " / 100 characters";

//   counter.style.color = length > 100 ? "red" : "black";
// });

// //1
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Form submitted!");
// });

// //2

// let loginForm = document.querySelector("#loginForm");

// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let username = document.querySelector("#username").value;
//   let password = document.querySelector("#password").value;

//   alert("Welcome, " + username + "!");
// });

// //3
// let signupForm = document.querySelector("#signup");
// signupForm.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let email = document.querySelector("#email").value;
//  let age = document.querySelector("#age").value;

//  if (age < 18) {
//  alert("You must be 18 or older to sign up!");
//  } else if (!email.includes("@")) {
//  alert("Please enter a valid email!");
//  } else {
//  alert("Signup successful!");
//  console.log("User registered:", email);
//  }
// }

// //4
// let searchForm = document.querySelector("#searchForm");
// let results = document.querySelector("#results");
// searchForm.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let query = document.querySelector("#searchInput").value;
//  results.innerText = `You searched for: "${query}"`;

 
//  document.querySelector("#searchInput").value = "";
// });


// //7.1
// let nameInput = document.querySelector("#name");
// let btn = document.querySelector("#submitBtn");
// btn.addEventListener("click", function() {
//  let userName = nameInput.value; // Use .value for inputs!
//  console.log("Name entered:", userName);
// });

// //2
// et form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let firstName = document.querySelector("#firstName").value;
//  let lastName = document.querySelector("#lastName").value;
//  let email = document.querySelector("#email").value;

//  console.log("Full Name:", firstName + " " + lastName);
//  console.log("Email:", email);
// });

// //3
// let dropdown = document.querySelector("#country");
// let btn = document.querySelector("#selectBtn");
// btn.addEventListener("click", function() {
//  let selected = dropdown.value;
//  console.log("Selected country:", selected);
//  alert("You selected: " + selected);
// });

// //1
// let nameInput = document.querySelector("#name");
// let btn = document.querySelector("#submitBtn");
// btn.addEventListener("click", function() {
//  let userName = nameInput.value; // Use .value for inputs!
//  console.log("Name entered:", userName);
// });

// //2
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let firstName = document.querySelector("#firstName").value;
//  let lastName = document.querySelector("#lastName").value;
//  let email = document.querySelector("#email").value;

//  console.log("Full Name:", firstName + " " + lastName);
//  console.log("Email:", email);
// });

// //3
// let dropdown = document.querySelector("#country");
// let btn = document.querySelector("#selectBtn");
// btn.addEventListener("click", function() {
//  let selected = dropdown.value;
//  console.log("Selected country:", selected);
//  alert("You selected: " + selected);
// });

// //1
// let textArea = document.querySelector("textarea");
// let counter = document.querySelector("#charCount");
// textArea.addEventListener("input", function() {
//  let count = textArea.value.length;
//  counter.innerText = count + " characters";
// });

// //2
// let nameField = document.querySelector("#name");
// nameField.addEventListener("change", function() {
//  console.log("Final name:", nameField.value);
//  alert("Name saved: " + nameField.value);
// });

// //3
// let searchBox = document.querySelector("#search");
// let suggestions = document.querySelector("#suggestions");
// searchBox.addEventListener("input", function() {
//  let query = searchBox.value;

//  if (query.length > 0) {
//  suggestions.innerHTML = `
//  <p>Searching for: ${query}</p>
//  <p>Result 1: ${query} tutorial</p>
//  <p>Result 2: ${query} guide</p>
//  `;
//  } else {
//  suggestions.innerHTML = "";
//  }
// }

// //4
// let password = document.querySelector("#password");
// let strength = document.querySelector("#strength");
// password.addEventListener("input", function() {
//  let length = password.value.length;

//  if (length < 4) {
//  strength.innerText = "Weak";
//  strength.style.color = "red";
//  } else if (length < 8) {
//  strength.innerText = "Medium";
//  strength.style.color = "orange";
//  } else {
//  strength.innerText = "Strong";
//  strength.style.color = "green";
//  }
// })

// //5
// let input = document.querySelector("#myInput");
// // Fires on every keystroke
// input.addEventListener("input", function() {
//  console.log("Typing...", input.value);
// });
// // Fires only when done (blur or Enter)
// input.addEventListener("change", function() {
//  console.log("Final value:", input.value);
//  alert("You entered: " + input.value);
// });


// //9.1
// let input = document.querySelector("#textInput");
// let display = document.querySelector("#display");
// input.addEventListener("input", function() {
//  display.innerText = input.value;
// });

// //Add Features
// let input = document.querySelector("#textInput");
// let display = document.querySelector("#display");
// let clearBtn = document.querySelector("#clearBtn");
// let boldBtn = document.querySelector("#boldBtn");
// // Live update
// input.addEventListener("input", function() {
//  display.innerText = input.value;
// });
// // Clear button
// clearBtn.addEventListener("click", function() {
//  input.value = "";
//  display.innerText = "Your text will appear here...";
// });
// // Bold toggle
// boldBtn.addEventListener("click", function() {
//  if (display.style.fontWeight === "bold") {
//  display.style.fontWeight = "normal";
//  } else {
//  display.style.fontWeight = "bold";
//  }
// });
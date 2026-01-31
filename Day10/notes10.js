// // The DOM makes your webpage interactive and dynamic!
// console.log(document);

// // Method 1: See it as HTML
// console.log(document);

// // Method 2: See it as a JavaScript object
// console.dir(document);

// // Selecting element by ID
// document.getElementById("id_name");

// //1 Select the Main Image
// let mainImage = document.getElementById("mainImg");
// console.log(mainImage);

// // Select the Heading
// let heading = document.getElementById("heading1");
// console.log(heading);

// // Check if Element Exists
// let element = document.getElementById("nonexistent");
// console.log(element);

// // Selecting elements by class name
// document.getElementsByClassName("class_name");

// //1.Select All Small Images
// let oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages);
// console.log(oldImages.length);

// //2: Access Individual Elements
// let oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages[0]);
// console.log(oldImages[1]);
// console.log(oldImages[2]);

// //3: Loop Through the Collection
// let oldImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < oldImages.length; i++) {
//   console.log(oldImages[i]);
// }

// //4: Select Box Links
// let boxLinks = document.getElementsByClassName("boxLink");
// console.log(boxLinks);

// // Selecting elements by tag name
// document.getElementsByTagName("tag_name");

// //1: Select All Paragraphs
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// //2: Count Elements
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length);

// //3: Select All Links
// let allLinks = document.getElementsByTagName("a");
// console.log(allLinks);
// console.log(allLinks.length);

// //4: Select All Images
// let allImages = document.getElementsByTagName("img");
// console.log(allImages);

// // querySelector examples
// //1: Select by ID
// let heading = document.querySelector("#heading1");
// console.log(heading);

// //2: Select by Class (First Match Only)
// let firstOldImage = document.querySelector(".oldImg");
// console.log(firstOldImage);

// //3: Select All Elements with querySelectorAll
// let allOldImages = document.querySelectorAll(".oldImg");
// console.log(allOldImages);

// //4: Select by Tag
// let firstParagraph = document.querySelector("p");
// console.log(firstParagraph);

// //Complex Selectors (Links Inside a Specific Div)
// let boxLinks = document.querySelectorAll(".box a");
// console.log(boxLinks);

// // innerText examples
// //1: Get Visible Text
// let para = document.querySelector("#description");
// console.log(para.innerText);

// //2: Change Heading Text
// let headingText = document.querySelector("#heading1");
// headingText.innerText = "Our Amazing Solar System";

// //3: Get Text from Multiple Elements
// let firstPara = document.querySelector("p");
// console.log(firstPara.innerText);

// // textContent examples
// // 1: Get All Text Content
// let para = document.querySelector("#description");
// console.log(para.textContent);

// //2: Change Text Content
// let heading = document.querySelector("h1");
// heading.textContent = "Welcome to Space!";

// //3: Compare with innerText
// let element = document.querySelector("#description");
// console.log(element.innerText); 
// console.log(element.textContent); 

// // innerHTML
// //1: See the HTML Structure
// let para = document.querySelector("p");
// console.log(para.innerHTML);

// //2: Add HTML Tags
// let heading = document.querySelector("#heading1");
// heading.innerHTML = "<u>The Solar System</u>";

// //3: Add Complex HTML
// let heading = document.querySelector("h1");
// heading.innerHTML = "The <span style='color: gold;'>Solar</span> System";

// // Read Links from Paragraph
// let para = document.querySelector("p");
// console.log(para.innerHTML);


// // 1.Practice 
// let mainImage = document.getElementById("mainImg");
// let oldImages = document.getElementsByClassName("oldImg");
// let paragraphs = document.getElementsByTagName("p");
// let description = document.querySelector("#description");
// let boxLinks = document.querySelectorAll(".box a");

// //2. Content Manipulation

// let mainImage = document.getElementById("mainImg");

// let oldImages = document.getElementsByClassName("oldImg");


// let paragraphs = document.getElementsByTagName("p");


// let description = document.querySelector("#description");


// let boxLinks = document.querySelectorAll(".box a");


// // Exercise 3: Combining Skills
// let oldImages = document.getElementsByClassName("oldImg");

// console.log(oldImages.length);

// let firstParagraph = document.querySelector("p");
// console.log(firstParagraph.innerText);

// let mainHeading = document.querySelector("h1");
// mainHeading.innerHTML = "<strong>" + mainHeading.innerText + "</strong>";

// let boxLinks = document.querySelectorAll(".box a");
// console.log(boxLinks.length);
//JavaScript Day 10: The Document Object Model (DOM)

//console.log(document); 
//Shows your entire HTML page

//Two Ways to Inspect the Document:

//Method 1:See it as HTML
// console.log(document);
//O/P: Shows HTML tags like <html>, <body>, <h1>...

//Method 2: See it as a JavaScript object
// console.dir(document);
//O/P: Shows all properties and methods you can use

//1. Selecting Elements by ID
// document.getElementById("id_name");

//Example 1: Select the Main Image
// let mainImage = document.getElementById("mainImg");
// console.log(mainImage);
//Output: <img src="..." id="mainImg">

//Example 2: Select the Heading
// let heading = document.getElementById("heading1");
// console.log(heading);
//O/P: <h1 id = "heading1">The Solar System</h1>

//Example 3: Check id Element Exists
// let element = document.getElementById("nonexistent");
// console.log(element);
//O/P: null (element doesn't exist)

//2. Selecting Elements by Class Name
// document.getElementsByClassName("class_name")

//Example 1: Select All Small Images
// let oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages);
// //O/P: HTMLCollection(3) [img.oldImg, img, oldImg, img.oldImg]
// console.log(oldImages.length); //3

//Example 2: Access Individual Elements
// let oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages[0]); //First image
// console.log(oldImages[1]); //Second image
// console.log(oldImages[2]); //Third image


//Example 3: Loop Through the Collection
// let oldImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < oldImages.length; i++) {
//     console.log(oldImages[i]);
    
// }
//Prints each image one by one

//Example 4: Select Bos Links 
// let boxLinks = document.getElementsByClassName("boxLink");
// console.log(boxLinks);
//O/P: HTMLCollection of all elements with class "boxLink"

//3. Selecting Elements by Tag Name
// document.getElementsByTagName("tag_name");

//Example 1: Select All Paragraphs
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
//O/P: HTMLCollection(2) - both paragraph elements

//Example 2: Count Elements
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length); //2

//Example 3: Select All Links 
// let allLinks = document.getElementsByTagName("a");
// console.log(allLinks);
//O/P: HTMLCollection of all <a> tags on the page
// console.log(allLinks.length); //Total number of links

//Example 4: Select All Images
// let allImages = document.getElementsByTagName("img");
// console.log(allImages);
//O/P: HTMLCollection(4), includes mainImg and 3 oldImg


//4. Query Selectors
//querySelector()
//querySelectorAll()

//Example 1: Select by ID
// let heading = document.querySelector("#heading1");
// console.log(heading);
//O/P: <h1 id="heading1">The Solar System</h1>

//Example 2: Select by Class (First Match Only)
// let firstOldImage = document.querySelector(".oldImg");
// console.log(firstOldImage);
//O/P: Only the FIRST image with class "oldImg"

//Example 3: Select All Elements with querySelectorAll
// let allOldImages = document.querySelectorAll(".oldImg");
// console.log(allOldImages);
//O/P: NodeList(3), all three images

//Example 4: Select by Tag
// let firstParagraph = document.querySelector("p");
// console.log(firstParagraph);
//O/P: The first <p> element 

//Example 5: Complex Selectors (Links Inside a Specific Div)
// let boxLinks = document.querySelectorAll(".box a");
// console.log(boxLinks);
//O/P: NodeList of all <a> tags INSIDE the .box div

//The Three Properties:

//1. innerText

//Example 1: Get Visible Text
// let para = document.querySelector("#description");
// console.log(para.innerText);
//O/P: "The Solar System formed from a dense region..."
// (Clean, formatted text)

//Example 2: Changing Heading Text
// let heading = document.querySelector("#heading1");
// heading.innerText = "Our Amazing Solar System";

//Example 3: Get Text from Multiple Elements 
// let firstPara = document.querySelector("p");
// console.log(firstPara.innerText);
//O/P: Clean paragraph text without HTML tags

//2. textContent

//Example 1: Get All Text Content
// let para = document.querySelector("#description");
// console.log(para.textContent);
//O/P: All text including any hidden elements and spacing

//Example 2: Changing Text Content
// let heading = document.querySelector("h1");
// heading.textContent = "Welcome to Space!";
//Updates the heading 

//Example 3: Compare with innerText
// let element = document.querySelector("#description");
// console.log(element.innerText); //Formatted, visible only
// console.log(element.textContent); //Raw, includes everything

//3. innerHTML

//Example 1: See the HTML Structure
// let para = document.querySelector("p");
// console.log(para.innerHTML);
// //Output: "<b>The Solar System</b> is the gravitationally"
// //bound system of the <a href ='...'>Sun</a>..."

//Example 2: Add HTML Tags
// let heading = document.querySelector("#heading1");
// heading.innerHTML = "<u>The Solar System</u>";
//The heading is now underlined!

//Example 3: Add Complex HTML
// let heading = document.querySelector("h1");
// heading.innerHTML = "The <span style='color:gold;'>Solar</span>System";
//"Solar" will be displayed in gold color

//Example 4: Read Links from Paragraph
// let para = document.querySelector("p");
// console.log(para.innerHTML);
//You can see all the <a> tags with their href attributes

//Practice Exercises

//Exercise 1: Select Practice

//1. Select the main image by its ID
let mainImg = document.getElementById("mainImg")
console.log(mainImg);

//2. Select all images with class "oldImg"
let oldImg = document.getElementsByClassName("oldImg");
console.log(oldImg); //HTMLCollection

//3. Select the description elements
let allParagraphs = document.getElementsByTagName("p")
console.log(allParagraphs); //HTMLCollection

//4. Select the description paragraph using querySelector
let descriptionPara = document.querySelector("#description");
console.log(descriptionPara);

//5. Select all links inside the .box div
let allLinks = querySelectorAll(".box a");
console.log(allLinks);




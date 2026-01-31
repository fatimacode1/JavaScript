//Day 10 - The Document Object Model (DOM)

//1. The document Object

console.dir(document);
//Output: #document
//Shows the entire document as an object
//with properties like:
// - body, head, title
// - methods like getElementById()

//2. Selecting Elements by ID
//Selecting the main image
let mainImage = document.getElementById("mainImg");
console.log(mainImage);
//Output: <img> src="..." id="mainImg">

//Selecting the heading
let heading = document.getElementById("heading1");
console.log(heading);

//3. Selecting Elements by Class

//Selecting all small images
let oldImages = document.getElementsByClassName("oldImg")
console.log(oldImages);
//Output: HTMLCollection(3) [img, img, img]

//Access individual elements
console.log(oldImages[0]); //First image
console.log(oldImages[1]); //Second image


//4. Selecting Elements by Tag
//Selecting all paragraph tags
let paragraphs = document.getElementsByTagName("P");
console.log(paragraphs);
//Output: HTMLCollection of all <p> elements

//Selecting all links
let links = document.getElementsByTagName("a");
console.log(links.length); //Total number of links 


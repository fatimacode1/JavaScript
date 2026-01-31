// //1: Get the ID of an element
// let solarImg = document.querySelector('img');
// let idName = solarImg.getAttribute('id');
// console.log(idName)

// //2: Change the ID
// let solarImg = document.querySelector('img');
// solarImg.setAttribute('id', 'galaxyImg');

// // 3: Change the image source
// let solarImg = document.querySelector('img');
// solarImg.setAttribute('src', 'assets/earth.jpg');

// //4: Get and change a link's href
// let link = document.querySelector('a');
// console.log(link.getAttribute('href')); // Current link
// link.setAttribute('href', 'https://nasa.gov');

// //5: Check if an attribute exists
// let heading = document.querySelector('h1');
// let headId = heading.getAttribute('id');
// console.log(headId); 

// //1: Change text color
// let heading = document.querySelector('h1');
// heading.style.color = 'orange';

// //  2: Change background color (camelCase!)
// let heading = document.querySelector('h1');
// heading.style.backgroundColor = 'black';

// // 3: Change multiple styles
// let para = document.querySelector('p');
// para.style.color = 'white';
// para.style.fontSize = '20px';
// para.style.padding = '15px';

// // 4: Change image size
// let img = document.querySelector('img');
// img.style.width = '500px';
// img.style.borderRadius = '10px';

// // 5: Hide an element
// let box = document.querySelector('.box');
// box.style.display = 'none'; // Element disappears

//  //1: Add a class
//  let para = document.querySelector('p');
// para.classList.add('green');

// // 2: Remove a class
// let para = document.querySelector('p');
// para.classList.remove('green');

// // 3: Check if a class exists
// let para = document.querySelector('p');
// console.log(para.classList.contains('green'));

// // 4: Toggle a class
// let para = document.querySelector('p');
// para.classList.toggle('green'); // Adds if missing
// para.classList.toggle('green'); // Removes if present

// // 5: Toggle on button click
// let box = document.querySelector('.box');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//  box.classList.toggle('highlight');
//  // Each click adds/removes the highlight class
// });

// // 1: Find all children of an element
// let box = document.querySelector('.box');
// let boxChildren = box.children;
// console.log(boxChildren); // [h4, ul] - heading and list

// // 2: Navigate from child to parent
// let list = document.querySelector('ul');
// console.log(list.parentElement); // Output: div.box

// //3: Get the next sibling
// let list = document.querySelector('ul');
// let firstItem = list.children[0]; // First <li>
// let secondItem = firstItem.nextElementSibling; // Second <li>
// console.log(secondItem.innerText); // "Location: Milky Way Galaxy

// // 4: Access first and last child
// let box = document.querySelector('.box');
// console.log(box.children[0]); // First child (h4)
// console.log(box.children[box.children.length -- 1]); // Last child (ul)

// // 5: Navigate through multiple siblings
// let heading1 = document.querySelector('#heading1');
// let nextEl = heading1.nextElementSibling; // img
// let afterThat = nextEl.nextElementSibling; // h2
// console.log(afterThat.innerText); // "Overview"

// //1: Create and add a button
// // Step 1: Create
// let newBtn = document.createElement('button');
// newBtn.innerText = "Explore Universe!";
// // Step 2: Add to page
// let box = document.querySelector('.box');
// box.appendChild(newBtn);

// //2: Add element to the start
// let heading = document.createElement('h3');
// heading.innerText = "Welcome to Space!";
// let body = document.querySelector('body');
// body.prepend(heading); // Adds at the very top

// // 3: Create a paragraph with styling
// let newPara = document.createElement('p');
// newPara.innerText = "The universe is vast and mysterious.";
// newPara.style.color = 'cyan';
// newPara.style.fontSize = '18px';
// let box = document.querySelector('.box');
// box.appendChild(newPara);

// //4: Using insertAdjacentElement (precise placement)
// let badge = document.createElement('span');
// badge.innerText = " 🌟 New!";

// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('beforeend', badge);
// // Adds the badge inside h1, at the end

// // 5: Add multiple elements
// let list = document.querySelector('ul');

// let item1 = document.createElement('li');
// item1.innerText = "Neptune: Ice Giant";

// let item2 = document.createElement('li');
// item2.innerText = "Uranus: Ice Giant";

// list.appendChild(item1);
// list.appendChild(item2);


// // 1: Add before an element
// let warning = document.createElement('p');
// warning.innerText = " Content may change";

// let desc = document.querySelector('#description');
// desc.insertAdjacentElement('beforebegin', warning);
// // Warning appears BEFORE the description paragraph

// // 2: Add inside, at the start
// let icon = document.createElement('span');
// icon.innerText = "A ";

// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('afterbegin', icon);
// // Icon appears inside h1, at the start

// // 3: Add inside, at the end
// let arrow = document.createElement('span');
// arrow.innerText = "B";

// let heading = document.querySelector('h2');
// heading.insertAdjacentElement('beforeend', arrow);
// // Arrow appears inside h2, at the end

// //1: Remove an element (Modern)
// let oldImg = document.querySelector('.oldImg');
// oldImg.remove();
// // First old image is deleted from page

// // 2: Remove using parent (Old way)
// let imageContainer = document.querySelector('.images');
// let oldImg = document.querySelector('.oldImg');
// imageContainer.removeChild(oldImg);

// //3: Remove all images with a class
// let oldImages = document.querySelectorAll('.oldImg');
// // Loop through and remove each one
// for (let img of oldImages) {
//  img.remove();
// }

// // 4: Remove on button click
// let btn = document.querySelector('button');
// let box = document.querySelector('.box');

// btn.addEventListener('click', function() {
//  box.remove(); // Box disappears when button is clicked
// });

// //5: Remove a specific child
// let list = document.querySelector('ul');
// let firstItem = list.children[0];
// firstItem.remove(); // First list item is removed

// //Practice Exercises
// //1.
// // 1. Select the main image
// let mainImage = document.getElementById("mainImg");

// // 2. Change its src to a different space image URL
// mainImage.src = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa";

// // 3. Change its id to "spaceImage"
// mainImage.id = "spaceImage";

// //2
// // 1. Select the h1 heading
// let heading = document.querySelector("h1");

// // 2. Change its color to cyan
// heading.style.color = "cyan";

// // 3. Add a background color of black
// heading.style.backgroundColor = "black";

// // 4. Add padding of 20px
// heading.style.padding = "20px";

// // 3: Use classList
// // 1. Select the first paragraph
// let firstParagraph = document.querySelector("p");

// // 2. Add a class called "highlight"
// firstParagraph.classList.add("highlight");

// // 3. Check if it contains "highlight"
// console.log(firstParagraph.classList.contains("highlight"));

// // 4. Toggle the class twice
// firstParagraph.classList.toggle("highlight");
// firstParagraph.classList.toggle("highlight");

// //4
// // 1. Select the .box div
// let box = document.querySelector(".box");

// // 2. Get all its children
// let boxChildren = box.children;
// console.log(boxChildren);

// // 3. Find the parent of the ul
// let ul = document.querySelector("ul");
// let ulParent = ul.parentElement;
// console.log(ulParent);

// // 4. Get the next sibling of the h1
// let heading = document.querySelector("h1");
// let nextSibling = heading.nextElementSibling;
// console.log(nextSibling);

// //5
// // 1. Create a new h3 with text "Created by JS"
// let newHeading = document.createElement("h3");
// newHeading.innerText = "Created by JS";

// // 2. Add it before the #description paragraph
// let description = document.querySelector("#description");
// description.before(newHeading);

// // 3. Create a button with text "Click Me"
// let button = document.createElement("button");
// button.innerText = "Click Me";

// // 4. Add it to the .box div
// let box = document.querySelector(".box");
// box.appendChild(button);

// // 5. Remove all images with class .oldImg
// let oldImages = document.querySelectorAll(".oldImg");
// oldImages.forEach(img => img.remove());
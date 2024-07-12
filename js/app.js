/** TODO: Build the navigation bar using JavaScript **/
let sectionList = document.getElementsByTagName("section");
let sectionIDs = [];    

for (let i = 0; i < sectionList.length; i++) {
    sectionIDs[i] = sectionList[i].id;
}

let navbar = document.getElementById("navbar__list");

for (let i = 0; i < sectionList.length; i++) {
     let navElement = document.createElement("li");
     let navLink = document.createElement("a");
     navLink.textContent = `Section ${i + 1}`;
     navLink.setAttribute("href", `#${sectionIDs[i]}`);
     navElement.appendChild(navLink);
     navLink.classList.add("menu__link");
     navbar.appendChild(navElement);
}
/** TODO: Add smooth scrolling **/

/** TODO: Add an active state **/

/** TODO: Add a comment form **/

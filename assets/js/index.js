// TASK 1
// * Select the `header` that is the closest to the first `h1` heading. Give the `header` a solid border of 5px. 
//![alt text](assets/images/header.png "Header")

let getH1 = document.querySelector(".heading")
let closestToH1 = getH1.closest(".heading");
closestToH1.style.border = "5px solid red";


//TASK 2
//* If the `.info` section contains an `.info-package`, select all `package-title`s and give the title's previous element a border.
// ![alt text](assets/images/packages.png "Packages")

let child = document.querySelector(".info-package");
let parent = document.querySelector(".info").contains(child);
let allPackage = document.querySelectorAll(".package-title");
let arr = Array.from(allPackage);

if (parent) {
    arr.forEach((elem) => {
        elem.nextElementSibling.style.border = "5px solid red"
     });
}


//TASK 3

arr.forEach((elem) => {
    let lastChild = elem.nextElementSibling;
  
    if(lastChild.matches(".mild")) {
        lastChild.style.border = "5px solid yellow";
    }
})



//TASK 4 
//* Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. 
//Note: the `.nav-list` should still contain its children. ![alt text](assets/images/footer.png "Footer")
let grandparent = document.querySelector(".nav-list");
let parents = Array.from(grandparent.children);
 //console.log(parents);

parents.forEach((elem) => { 
  // console.log(elem);
    let li = document.createElement("LI");
    let text = document.createTextNode(elem.innerHTML);
    li.appendChild(text);
    document.querySelector(".site-map").appendChild(li) ; 
  
});




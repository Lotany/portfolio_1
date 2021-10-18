// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const b1= document.querySelector(".scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
window.addEventListener("scroll", () => {
if(document.body.scrollTop>20 // document.documentElement.scrollTop>20){

b1.style.display='block';

  }else{

 b1.style.display='none';
}
})

b1.addEventListener('click',() =>{
 window.scroll({
  top:0,
  behavior:"smooth"
 }
 )
})




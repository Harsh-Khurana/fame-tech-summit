const toggleBtn = document.getElementsByClassName("fa-bars")[0];
let navList = document.getElementsByClassName("nav-item-list")[0];
const navItemArray = document.getElementsByClassName('nav-item');

// This is for making navbar responsive with hamburger sign instead of 
// full navbar, this fn hadles the clicks on hamburger icon
toggleBtn.addEventListener("click",function(){
	navList.classList.toggle('nav-toggle');
})

// JavaScript Document

var didScroll = false;
var stickyNavBar = document.getElementById("stickyNav");
var navLinks = document.querySelectorAll(".link");
var burgerFired = document.querySelector('.burgerButton');
var burgerMenu = document.querySelector("#burgerNav");

	burgerFired.addEventListener("click", shootNav, false);
	
	function shootNav() {
		burgerMenu.classList.toggle('mobileExpand');
		console.log("expand menu");
	}

window.onscroll = scrollFire;

function scrollFire() {
    didScroll = true;
}

function getPosition(element) {
		var yPosition = 0;
	  
		while(element) {
			yPosition += (element.offsetTop - element.scrollTop);
			element = element.offsetParent;
		}
		return yPosition;
		
}



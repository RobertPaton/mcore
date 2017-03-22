// JavaScript Document

var didScroll = false;
var stickyNavBar = document.getElementById("stickyNav");

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
    didScroll = true;
}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
    var ScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
		currentImage = document.querySelector('.active');
		
		 if(ScrollTop >= (currentImage.offsetHeight + 60)) {
			stickyNavBar.classList.add("makesticky");
			console.log("is sticky");
			} else {
				stickyNavBar.classList.remove("makesticky");
			}
    }
}, 100);




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

setInterval(function() {
	
	if(didScroll) {
        didScroll = false;
    var ScrollTop = $(document).scrollTop(),
		currentImage = document.querySelector('.active');
		

		
		 if(ScrollTop >= (currentImage.offsetHeight + 60)) {
			stickyNavBar.classList.add("makesticky");
			} else {
				stickyNavBar.classList.remove("makesticky");
			}
		
	}

	
}, 100);


function getPosition(element) {
		var yPosition = 0;
	  
		while(element) {
			yPosition += (element.offsetTop - element.scrollTop);
			element = element.offsetParent;
		}
		return yPosition;
		
}


for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", whizGo, false);
}

function whizGo() {
	var linkClicked = String(this.href.split("#")[1]),
		expandedList = document.querySelector('#burgerNav'),	
		grabTarget = document.getElementById(linkClicked);

		if(expandedList.classList.contains('mobileExpand')){
			expandedList.classList.remove('mobileExpand');	
		}
	
		var howFar = $(grabTarget).offset().top;
		console.log(howFar);

		var whereAreWe = $(document).scrollTop(),
				newFar = whereAreWe + howFar;
				console.log(whereAreWe);
			TweenLite.to(window, .5, {scrollTo:howFar, ease:Power4.easeInOut});

}

var homeLink = document.querySelectorAll('.logo');

for (var i = 0; i < homeLink.length; i++) {
	homeLink[i].addEventListener("click", goHome, false);
}

function goHome() {
			TweenLite.to(window, .5, {scrollTo:0, ease:Power4.easeInOut});
}







/* old code, can be deleted?
// JavaScript Document

var didScroll = false;
var stickyNavBar = document.getElementById("stickyNav");

window.onscroll = scrollFire;

function scrollFire() {
    didScroll = true;
}

setInterval(function() {
	
	if(didScroll) {
        didScroll = false;
    var ScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
		currentImage = document.querySelector('.active');
		
		 if(ScrollTop >= (currentImage.offsetHeight + 60)) {
			stickyNavBar.classList.add("makesticky");
			} else {
				stickyNavBar.classList.remove("makesticky");
			}

		var anchors = document.querySelectorAll('.linkTarget');
		
			for (var i = 0; i < anchors.length; i++) {
				anchors[i].getBoundingClientRect();
					var scrollTop = anchors.top;
					console.log(scrollTop);
			}
	}
}, 100); */

//this code returns the value of how much you have scrolled, this can be deleted if not used for any other functions as it doesn't work well with responsiveness..aka the direct values given are differ from screen sizes

/*var scrollTop; 

window.addEventListener("scroll", userScroll, false);

function userScroll(){ 
	scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; 
	console.log(scrollTop);
	
}*/

//screen detion script starts here **********************

$(window).scroll(function() {
	
	
	
	if (checkVisible($('#comDetect'))) {
        $('#comActive').css("color", "#fff");
		$('#medActive').css("color", "#545759");
		$('#resActive').css("color", "#545759");
    } else {
        $('#comActive').css("color", "#545759");
    }
	
	if (checkVisible($('#resDetect'))) {
        $('#resActive').css("color", "#fff");
		$('#comActive').css("color", "#545759");
    } else {
        $('#resActive').css("color", "#545759");
    }
	
	if (checkVisible($('#medDetect'))) {
        $('#medActive').css("color", "#fff");
		$('#conActive').css("color", "#545759");
		$('#comActive').css("color", "#545759");
    } else {
        $('#medActive').css("color", "#545759");
    }
	
	if (checkVisible($('.conDetect'))) {
        $('#conActive').css("color", "#fff");
		$('#medActive').css("color", "#545759");
    } else {
        $('#conActive').css("color", "#545759");
    }
	
	if (checkVisible($('#aboutText'))) {
        $('.aboActive').css("color", "#fff");
		$('#resActive').css("color", "#545759");
    } else {
        $('.aboActive').css("color", "#545759");
    }
});

function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}

//screen detection script ends here**************************
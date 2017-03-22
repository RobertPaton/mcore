var titleArray = ["Chandelier", "Circuit Print", "Skywalk", "Hallway", "Light Balls", "Escalator", "Light Fixture", "Residential Lighting", "Lighting the Way", "Surge Protector", "Wiring", "Jacuzzi"];

var descArray = ["Installation of ballroom chandelier", "Detailed blue prints for large commercial installations", "Lighting for hotel skywalk", "Emergency lighting for medical or commercial facilities", "Decorativer lighting for home or office", "Lighting for inground parking lots", "Basic light installations", "Atmosphere lighting for kitchens or dens", "Electrical services for nearly all needs", "Surge protection for your entire home or office", "Knowledgebale and experienced electricians", "Jacuzzi wiring connections!"];

function initlightbox(){
	console.log("Lightbox is running")
	
	var pictures = document.querySelectorAll(".responsive");
	
	for (i=0; i<pictures.length; i++){ //loop trough the pictures and apply click listeners
			pictures[i].addEventListener("click", setsize, false);
			pictures[i].addEventListener("click", overlay, false);
		}
		
	overlayGod = document.querySelector("#overlayjs");
	overlayGod.addEventListener("click", overlay, false);

}

function setsize() {
var	modalWindow = document.querySelector('#modal'),
	modalImage = document.querySelector('#modal img'),
	windowHeight = $(window).height() - 60,
	windowWidth = $(window).width(),
	scrollHeight = window.pageYOffset;
	
	console.log("you clicked");
	
	modalImage.style.maxHeight = (windowHeight - 100) + "px";
	modalWindow.style.maxWidth = modalImage.width + "px";
	modalWindow.style.top = ((windowHeight - modalImage.height) / 2) + scrollHeight + "px";
	modalWindow.style.left = ((windowWidth - modalImage.width) / 2) + "px";
}

function overlay(){
var	overlayGod = document.querySelector('#overlayjs'),
	popUpImage = document.querySelector('#imagePopUp'),
	imageThumbnail = document.querySelectorAll('.thumbnail'),
	imageTitle = document.querySelector('#modal h2'),
	imageDesc = document.querySelector('#modal p'),
	modalWindow = document.querySelector('#modal'),
	modalImage = document.querySelector('#modal img'),
	windowHeight = $(window).height() - 60,
	windowWidth = $(window).width(),
	scrollHeight = window.pageYOffset;
	
	for(var i = 0; i < imageThumbnail.length; i++) {
		imageThumbnail[i].addEventListener("click", swapLarge, false);	
	}
	 function swapLarge(){
		popUpImage.src = ("images/Gallery/" + this.id + ".jpg");
		imageTitle.textContent = titleArray[this.id];
		imageDesc.textContent = descArray[this.id];
		
	 }
		
		if(overlayGod.className =="hidden"){
			overlayGod.className ="overlay";
		} else{
			overlayGod.className ="hidden";
		}
		
		if (modalWindow.className =="hidden") {
			modalWindow.className = "modalUp";
		}else{
			modalWindow.className ="hidden";
		}
	
}

window.addEventListener("resize", function(){
var	modalWindow = document.querySelector('#modal'),
	modalImage = document.querySelector('#modal img'),
	windowHeight = $(window).height() - 60,
	windowWidth = $(window).width(),
	scrollHeight = window.pageYOffset;
	
	modalImage.style.maxHeight = (windowHeight - 100) + "px";
	modalWindow.style.maxWidth = modalImage.width + "px";
	modalWindow.style.top = ((windowHeight - modalImage.height) / 2) + scrollHeight + "px";
	modalWindow.style.left = ((windowWidth - modalImage.offsetWidth) / 2) + "px";
	

});

window.addEventListener("scroll", function(){
var	modalWindow = document.querySelector('#modal'),
	modalImage = document.querySelector('#modal img'),
	windowWidth = $(window).width(),
	windowHeight = $(window).height() - 60,
	scrollHeight = window.pageYOffset;
	
	modalImage.style.maxHeight = (windowHeight - 100) + "px";
	modalWindow.style.maxWidth = modalImage.width + "px";
	modalWindow.style.top = ((windowHeight - modalImage.height) / 2) + scrollHeight + "px";
	modalWindow.style.left = ((windowWidth - modalImage.offsetWidth) / 2) + "px";
	

	
});





window.addEventListener("load", initlightbox, false);
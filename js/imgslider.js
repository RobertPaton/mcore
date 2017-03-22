// JavaScript Document

/* setup */
var slideImages = document.querySelectorAll('#slider img'),
    slideImgsLength = slideImages.length - 1,
    slider = document.getElementById('slider'),
	sliderWrap = document.querySelector('.sliderWrapper'),
    activeImage = 0;

/* responsive images */
if (document.documentElement.clientWidth >= 420 ) {
    var imgs = slider.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = ("images/slider/md-slider/slide" + imgs[i].id + ".jpg");
    }
}

if (document.documentElement.clientWidth >= 768) {
    var imgs = slider.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = ("images/slider/lg-slider/slide" + imgs[i].id + ".jpg");
    }
}

/* slider */
slider.style.overflow = 'hidden';

slider.insertAdjacentHTML('afterbegin', '<div id="prev" class="control"><a href="#" onclick="return: false;">Next</a></div><div id="next" class="control"><a href="#" onclick="return: false;">Previous</a></div>');

for (var i = 0; i < slideImages.length; i++) {
	var slide = slideImages[i];
	
	if (i == 0) {
	slide.classList.add('active');
	}
}

window.addEventListener("load", function(){
var	currentImage = document.querySelector('.active'),
	navArrows = document.querySelectorAll('.control');
	for (var i = 0; i < navArrows.length; i++) {
		navArrows[i].style.marginTop = ("-" + currentImage.offsetHeight / 2 + "px");
	}
	
	sliderWrap.style.height = (currentImage.offsetHeight + "px");
	slider.style.height = (currentImage.offsetHeight + "px");
	
});

window.addEventListener("resize", function(){
var	currentImage = document.querySelector('.active'),
	navArrows = document.querySelectorAll('.control');
	for (var i = 0; i < navArrows.length; i++) {
		navArrows[i].style.marginTop = ("-" + currentImage.offsetHeight / 2 + "px");
	}
	
	sliderWrap.style.height = (currentImage.offsetHeight + "px");
	slider.style.height = (currentImage.offsetHeight + "px");
	
	if (document.documentElement.clientWidth < 420 ) {
		var imgs = slider.getElementsByTagName("img");
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].src = ("images/slider/sm-slider/slide" + imgs[i].id + ".jpg");
		}
	}
	
	if (document.documentElement.clientWidth >= 420 ) {
		var imgs = slider.getElementsByTagName("img");
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].src = ("images/slider/md-slider/slide" + imgs[i].id + ".jpg");
		}
	}
	
	if (document.documentElement.clientWidth >= 768) {
		var imgs = slider.getElementsByTagName("img");
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].src = ("images/slider/lg-slider/slide" + imgs[i].id + ".jpg");
		}
	}

});
/* end slider */


/* navigation */
var prev = document.getElementById('prev'),
    next = document.getElementById('next');
	
prev.addEventListener('click', function() {
	slideImages[activeImage].classList.remove('active');
  if (activeImage == 0) {
    slideImages[slideImgsLength].classList.add('active');
    activeImage = slideImgsLength;
  } else {
    slideImages[activeImage - 1].classList.add('active');
    activeImage--;
  }
});

next.addEventListener('click', function() {
  slideImages[activeImage].classList.remove('active');
  
  if (activeImage >= slideImgsLength) {
    slideImages[0].classList.add('active');
    activeImage = 0;
  } else {
    slideImages[activeImage + 1].classList.add('active');
    activeImage++;
  }
});

setInterval(function(){
	slideImages[activeImage].classList.remove('active');
	
	if (activeImage >= slideImgsLength) {
	slideImages[0].classList.add('active');
	activeImage = 0;
	} else {
	slideImages[activeImage + 1].classList.add('active');
	activeImage++;
	changeText();
	}
}, 4000);

var count = 0;

var nextWord = (function() {
var wordArray = ["We will exhibit the highest degree of professionalism in developing innovative solutions that meet the highest demands of our customers.", 
"We will respect our customers by providing the highest level of service while completing the work correctly, on time, and on budget.","We will provide a safe work environment and operate responsibly.","We will develop affirmative business relationships that create positive situationsand lasting opportunities for M-CORE Electrical Services and our valuedcustomers."];
	return function() {
    return wordArray[++count % wordArray.length];
  }
}());

document.getElementById('#next');
next.addEventListener('click', changeText, false);

function changeText(){
	document.getElementById('sliderText').innerHTML = nextWord();
}

var nextWord2 = (function() {
var wordArray2 = ["We will exhibit the highest degree of professionalism in developing innovative solutions that meet the highest demands of our customers.", 
"We will respect our customers by providing the highest level of service while completing the work correctly, on time, and on budget.","We will provide a safe work environment and operate responsibly.","We will develop affirmative business relationships that create positive situationsand lasting opportunities for M-CORE Electrical Services and our valuedcustomers."];
	return function() {
    return wordArray2[--count % wordArray2.length];
  }
}());


document.getElementById('#prev');
prev.addEventListener('click', changeText2, false);

function changeText2(){
	document.getElementById('sliderText').innerHTML = nextWord2();
}


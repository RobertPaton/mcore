var theVideo, theExt, progressControl, progressHolder, playProgressBar, playProgressInterval, videoWasPlaying, currentTimeDisplay, durationDisplay, playPause, dockedVid, volumeControl, volumeDisplay, videoSwap, vidOptions, vidTitle;

(function videoPlayer() {
	
	console.log("Player Fired");
	
	theVideo = document.querySelector("#myVideo");
	progressControl = document.getElementById("progress");
    progressHolder = document.getElementById("progress_box");
    playProgressBar = document.getElementById("play_progress");
	currentTimeDisplay = document.getElementById("current_time_display");
	durationDisplay = document.getElementById("duration_display");
	toggleButton = document.querySelector("#playVideo");
	playPause = document.getElementById("playPauseImg");
	volumeControl = document.getElementById("volume");
	volumeDisplay = document.getElementById("volume_display");
	vidOptions = document.querySelectorAll(".switchVid");
	vidTitle = document.querySelector("#videoName");
	
	toggleButton.addEventListener("click", togglePlay, false);
	theVideo.addEventListener("click", togglePlay, false);	

	var currentlyPlaying = theVideo.currentSrc;
		theExt = currentlyPlaying.substr(currentlyPlaying.lastIndexOf("."));
		console.log(theExt);
		
	for (i=0; i<vidOptions.length; i++) {
		vidOptions[i].addEventListener("click", loadVid, false);
	}
	
	progressHolder.addEventListener("mousedown", function(){
	  stopTrackingPlayProgress();
	 
	  if (theVideo.paused) {
		videoWasPlaying = false;
	  } else {
		videoWasPlaying = true;
		theVideo.pause();
	  }
	 
	  blockTextSelection();
	  document.onmousemove = function(e) {
		setPlayProgress(e.pageX);
	  }
	 
	  document.onmouseup = function() {
		unblockTextSelection();
		document.onmousemove = null;
		document.onmouseup = null;
		if (videoWasPlaying) {
		  theVideo.play();
		  trackPlayProgress();
		}
	  }
	}, true);
	 
	progressHolder.addEventListener("mouseup", function(e){
	  setPlayProgress(e.pageX);
	}, true);
	
	trackPlayProgress();
	
	volumeControl.addEventListener("mousedown", function(){
	  blockTextSelection();
	  document.onmousemove = function(e) {
		setVolume(e.pageX);
	  }
	  document.onmouseup = function() {
		unblockTextSelection();
		document.onmousemove = null;
		document.onmouseup = null;
	  }
	}, true);
	 
	volumeControl.addEventListener("mouseup", function(e){
	  setVolume(e.pageX);
	}, true);
	
	updateVolumeDisplay();
	
	function loadVid() {
		console.log("button clicked");
		theVideo.src = "video/" + this.id + theExt;
		theVideo.load();
		theVideo.play();
		playPause.src = "images/pause.png";
		var newName = this.querySelector("h3").innerHTML;
		var newTitle = this.querySelector("h4").innerHTML;
		var newBlurb = this.querySelector("p").innerHTML;
		console.log(newName);
		console.log(newTitle);
		console.log(newBlurb);
		infName.innerHTML = newName;
		infTitle.innerHTML = newTitle;
		infBlurb.innerHTML = newBlurb;
		trackPlayProgress();
	}
	
	function updatePlayProgress(){
			playProgressBar.style.width = ((theVideo.currentTime / theVideo.duration) * (progressHolder.offsetWidth - 2)) + "px";
			updateTimeDisplay();
	}
	
	function trackPlayProgress(){
			playProgressInterval = setInterval(updatePlayProgress, 33);
	}
		 
	function stopTrackingPlayProgress(){
			clearInterval(playProgressInterval);
	}
	
	function updateTimeDisplay(){
			currentTimeDisplay.innerHTML = formatTime(theVideo.currentTime);
			if (theVideo.duration) durationDisplay.innerHTML = formatTime(theVideo.duration);
	}
	 
	function formatTime(seconds) {
		  seconds = Math.round(seconds);
		  minutes = Math.floor(seconds / 60);
		  minutes = (minutes >= 10) ? minutes : "0" + minutes;
		  seconds = Math.floor(seconds % 60);
		  seconds = (seconds >= 10) ? seconds : "0" + seconds;
		  return minutes + ":" + seconds;
	}
	
	function togglePlay() {
		console.log("toggle clicked");
		if(theVideo.paused) {
			theVideo.play();
			playPause.src = "images/pause.png";
			trackPlayProgress();
		} else { 
			theVideo.pause();
			playPause.src = "images/play.png";
			stopTrackingPlayProgress();
		}
	}
	
	function setPlayProgress(clickX) {
		  var newPercent = Math.max(0, Math.min(1, (clickX - findPosX(progressHolder)) / progressHolder.offsetWidth));
		  theVideo.currentTime = newPercent * theVideo.duration
		  playProgressBar.style.width = newPercent * (progressHolder.offsetWidth - 2)  + "px";
		  updateTimeDisplay();
	}
	
	function blockTextSelection(){
			document.body.focus();
			document.onselectstart = function () { return false; };
	}
	 
	function unblockTextSelection(){
			document.onselectstart = function () { return true; };
	}
	
	function findPosX(obj) {
	  var curleft = obj.offsetLeft;
	  while(obj = obj.offsetParent) {
		curleft += obj.offsetLeft;
	  }
	  return curleft;
	}
	
	function setVolume(clickX) {
	  var newVol = (clickX - findPosX(volumeControl)) / volumeControl.offsetWidth;
	  if (newVol > 1) {
		newVol = 1;
	  } else if (newVol < 0) {
		newVol = 0;
	  }
	  theVideo.volume = newVol;
	  updateVolumeDisplay();
	}
	
	function updateVolumeDisplay(){
	  var volNum = Math.floor(theVideo.volume * 6);
	  for(var i=0; i<6; i++) {
		if (i < volNum) {
		  volumeDisplay.children[i].style.borderColor = "#fff";
		} else {
		  volumeDisplay.children[i].style.borderColor = "#555";
		}
	  }
	}
	
	function loadVid() {
		theVideo.src = "video/" + this.id + theExt;
		theVideo.load();
		theVideo.play();
		playPause.src = "images/pause.png";
		var newName = this.querySelector("span").innerHTML;
		vidTitle.innerHTML = newName;
		trackPlayProgress();
	}

})();



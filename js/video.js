var video;

window.addEventListener("load", function() {
	console.log(document.querySelector('#player1').muted);
	// console.log("Good job opening the window");
	video = this.document.querySelector("#player1");
	video.load();
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector('#player1');
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.querySelector('#player1');
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video = document.querySelector('#player1');
	video.playbackRate *= 0.9;
	console.log("Playback speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	video = document.querySelector('#player1');
	video.playbackRate /= 0.9;
	console.log("Playback speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video = document.querySelector('#player1');
	if (video.currentTime + 10 > video.duration) {video.currentTime = 0;}
	else video.currentTime += 10;
	console.log("Video location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector('#player1');
	if (video.muted) 
	{
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
	else 
	{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	console.log(video.muted);
});

document.querySelector("#slider").addEventListener("click", function() {
	video = document.querySelector('#player1');
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + '%';
	video.volume = document.querySelector("#slider").value / 100;
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector('video').classList.add("oldSchool");
	console.log("Vintage!");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector('video').classList.remove("oldSchool");
	console.log("Old School!");
});

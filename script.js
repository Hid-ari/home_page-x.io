function showTime() {
	const date = new Date();

	let weekday = date.toLocaleString("en", { weekday: "short" });
	//short or long
	let hour = date.toLocaleString("pl", { hour: "2-digit", hour12: true }).replace(/\D/g, '');
	//you're using 12h time format if you want 24h time format, put false   
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "short" });
	//short or long
	//let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date"
	).innerHTML = `${weekday}, ${month} ${day} <br> ${hour}:${minute}:${second}`;
	//as you will see the code in html
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();

//document.getElementById("video-n1").addEventListener("click", function() {
//	if (this.muted) {
//	  this.muted = false;
//	} else {
//	  this.muted = true;
//	}
//  });

//  document.getElementById("video-n1").volume = 0.3;

  function validateForm() {
	var searchBox = document.querySelector('.search-box');
	if (searchBox.value.trim() === '') {
		return false;
	}
	return true;}

	function handleInput(input) {
		input.parentNode.classList.add('focus');
	}
	
	function handleBlur(input) {
		input.parentNode.classList.remove('focus');
	}
	
	function validateForm() {
		return true;
	}
	function handleInput(input) {
		input.parentNode.classList.add('focus');
	}
	
	function handleBlur(input) {
		input.parentNode.classList.remove('focus');
	}
	
	function validateForm() {
		return true; 
	}
	
	document.addEventListener('DOMContentLoaded', function() {
		var audio = document.getElementById('audio');
		var image = document.getElementById('video-n1');

		var songList = [
			{path: "music/GOOD DONT DIE Lyrics.mp3" },
			{path: "music/Paperwork Audio.mp3" },
		  ];
		
		  var currentSongIndex = 0;
		
		  image.addEventListener('click', function() {
			if (audio.paused) {
			  audio.play();
			} else {
			  audio.pause();
			}
		  });
		
		  image.addEventListener('dblclick', function() {
			currentSongIndex = (currentSongIndex + 1) % songList.length;
			var newSong = songList[currentSongIndex];
			audio.src = newSong.path;
			audio.play();
		  });
		});
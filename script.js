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
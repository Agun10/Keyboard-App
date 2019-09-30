const state = {
	previousValue: ''
};

function handleLetterKey(key) {
	var string = key.target.textContent.toString();
	var array = string.split(' ');  
	
	if(shiftKey == true){
		var character = array[0].toString().toUpperCase();
		document.getElementById("keyboard-display").value = state.previousValue.toString() + character;
		state.previousValue = document.getElementById("keyboard-display").value;  
	}
	else {
		var character = array[0].toString().toLowerCase();
		document.getElementById("keyboard-display").value = state.previousValue.toString() + character;
		state.previousValue = document.getElementById("keyboard-display").value; 
	}
}

Array.prototype.slice.call(document.getElementsByClassName("letter")).map(eachKey => 
	eachKey.addEventListener("click", handleLetterKey));
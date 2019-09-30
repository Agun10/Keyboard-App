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

function handleCharacterKey(key) {
	var string = key.target.textContent.toString();
	var array = string.split(' ');  
	
	if(shiftKey == true){
		var character = array[0].toString();
		document.getElementById("keyboard-display").value = state.previousValue.toString() + character;
		state.previousValue = document.getElementById("keyboard-display").value;  
	}
	else {
		var character = array[0].toString();
		document.getElementById("keyboard-display").value = state.previousValue.toString() + character;
		state.previousValue = document.getElementById("keyboard-display").value; 
	}
}

function handleNumberKey(key) {
	var string = key.target.textContent.toString();
	var array = string.split(' ');  
	
	if(shiftKey == true){
		var character = array[1].toString();
		document.getElementById("keyboard-display").value = state.previousValue.toString() + character;
		state.previousValue = document.getElementById("keyboard-display").value;  
	}
	else {
		var character = array[0].toString();
		document.getElementById("keyboard-display").value = state.previousValue.toString() + character;
		state.previousValue = document.getElementById("keyboard-display").value; 
	}
}

function handleSpace() {
	document.getElementById("keyboard-display").value = state.previousValue.toString() + ' ';
	state.previousValue = document.getElementById("keyboard-display").value; 
}

function handleClearAll() {
	document.getElementById("keyboard-display").value = ' ';
	state.previousValue = ' '; 
}

Array.prototype.slice.call(document.getElementsByClassName("letter")).map(eachKey => 
    eachKey.addEventListener("click", handleLetterKey));
    
Array.prototype.slice.call(document.getElementsByClassName("character")).map(eachKey => 
    eachKey.addEventListener("click", handleCharacterKey));

Array.prototype.slice.call(document.getElementsByClassName("number")).map(eachKey => 
    eachKey.addEventListener("click", handleNumberKey));

document.getElementById("space-bar").addEventListener("click", handleSpace);

document.getElementById("clear-all").addEventListener("click", handleClearAll); 
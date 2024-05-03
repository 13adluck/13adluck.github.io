function makeBiggerText(){
	alert("Increased font size");
	document.getElementById("textInput").style.fontSize = "24pt";
}
function fancyStyle(){
	alert("Style set to fancy");
	document.getElementById("textInput").style.fontWeight = "bold";
	document.getElementById("textInput").style.color = "Blue";
	document.getElementById("textInput").style.textDecoration = "underline";
}
function boring(){
	alert("Style set to boring");
	document.getElementById("textInput").style.fontWeight = "normal";
	document.getElementById("textInput").style.color = "black";
	document.getElementById("textInput").style.textDecoration = "none";
}

function moo(){
	alert("Set to uppercase");
	var str = document.getElementById("textInput").value;
	document.getElementById("textInput").style.textTransform = "uppercase";
	//var str = "How are you?";
	var parts = str.split(".");  	// ["How", "are", "you?"]
	//str = parts.join("-Moo");       // "How_are_you?"
	for(var x = 0; x < parts.length; x++){
		var words = parts[x].split(" ");
		var endSentence = words.length - 1;
		words[endSentence] = words[endSentence] + "-Moo ";
		parts[x] = words.join("-Moo ");
	}
	document.getElementById("textInput").value = str;
	textInput.value = parts.join(". ");
}
function underscore(){
	alert("Set to uppercase");
	var str = document.getElementById("textInput").value;
	document.getElementById("textInput").style.textTransform = "uppercase";
	var parts = str.split(".");  	// ["How", "are", "you?"]
	for(var x = 0; x < parts.length; x++){
		var words = parts[x].split(" ");
		var endSentence = words.length - 1;
		words[endSentence] = words[endSentence] + ". ";
		parts[x] = words.join("_");
	}
	document.getElementById("textInput").value = str;
	textInput.value = parts.join(". ");
}
function alertBox(){
	alert("Hello, world!");
}


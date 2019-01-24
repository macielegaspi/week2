// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElementById("pats-img").classList.add("opaque");
	document.getElementById("rams-img").classList.add("opaque");
	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
}

function tunaParty(el){
	document.getElementById("purple").src = "images/tuna4.jpg";
	document.getElementById("grey").src = "images/tuna4.jpg";
	document.getElementById("green").src = "images/tuna4.jpg";
	document.getElementById("green2").src = "images/tuna4.jpg";

}
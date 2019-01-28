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
	document.getElementById("grey").src = "images/tuna4.jpg";
	document.getElementById("green").src = "images/tuna4.jpg";
	document.getElementById("green2").src = "images/tuna4.jpg";
	document.getElementById("purple").classList.add("block");

}

function tunaParty2(el){
	document.getElementById("blue").src = "images/tuna3.jfif";
	document.getElementById("orange2").src = "images/tuna3.jfif";
}

function resetButton(el){
	document.getElementById("reset").src = "images/resetbuttonpush.png";
	document.getElementById("grey").src = "";
	document.getElementById("green").src = "";
	document.getElementById("green2").src = "";
	document.getElementById("orange2").src = "images/tuna2.jfif";
	document.getElementById("blue").src = "images/stockimg3.jfif";


}
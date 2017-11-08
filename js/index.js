/* Hoofd auteur: Peet Neunzig 
	klas: 205 
	versie: 1.4 
	Datum: 1 november 2017 */

console.log('test test test');

document.getElementById("inlog").onclick = function() {
// Functie die uitgevoerd wordt zodra je op het element met "inlog" als ID klikt
	if(document.getElementById("melding").classList.contains('block')){
		document.getElementById("melding").classList.remove('block');
	} else {
		document.getElementById("melding").classList.add('block');
	}
}


var urlMenu = document.getElementById('sorteerMenu');
urlMenu.onchange = function(){
	var userOption = this.options[this.selectedIndex];
	if (userOption.value !="nothing"){
		window.open(userOption.value, "Aantal Hartjes");
	}
}


document.getElementById("hart").addEventListener("click", hart);
function hart() {	
	document.getElementById("hart").classList.add("fa-heart");
    document.getElementById("hart").classList.remove("fa-heart-o");
}

document.getElementById("email").addEventListener("click", myScript);	
function myScript() {	

	 // Laat het element zien met "melding" als ID door display op block te zetten (staat nu op display: none;)
	 document.getElementById("letop").classList.add("block");
};



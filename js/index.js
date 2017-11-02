/* Hoofd auteur: Peet Neunzig 
	klas: 205 
	versie: 1.3 
	Datum: 25 september 2017 */

console.log('test test test')

// Functie die uitgevoerd wordt zodra je op het element met "inlog" als ID klikt
document.getElementById("inlog").onclick = function() {
	 // Laat het element zien met "melding" als ID door display op block te zetten (staat nu op display: none;)
	 document.getElementById("melding").style.display = "block";
	};


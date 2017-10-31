/* Hoofd auteur: Peet Neunzig 
	klas: 205 
	versie: 1.3 
	Datum: 25 september 2017 */

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// Functie die uitgevoerd wordt zodra je op het element met "da" als ID klikt
document.getElementById("inlog").onclick = function() {
	 // Laat het element zien met "popup" als ID door display op block te zetten (staat nu op display: none;)
	 document.getElementById("bg").style.display = "block";
	 document.getElementById("popup").style.display = "block";
	;}

// Functie die uitgevoerd wordt zodra je op het element met "close" als ID klikt
document.getElementById("bg").onclick = function() {
	// Bron: http://stackoverflow.com/questions/5480945/refreshing-page-on-click-of-a-button
	document.getElementById("bg").style.display = "none";
	 document.getElementById("popup").style.display = "none";
};




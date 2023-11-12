// =======================
// Soorten Loops!
//========================

// =======================
// FOR_OF LOOP!
//========================
// Gebruik de for-of loop om REEDS BESTAANDE HTML objecten te selecteren, zodat je door hen heen kan "loopen" om ze te wijzigen! Hier bijvoorbeeld "loopen" we langs ALLE H2 elementen om de tekstjes ervan te veranderen. Eerst maken we een variabele waarin we alle H2 elementen van je pagina of website mee selecteren:
var subkopjes = document.querySelectorAll("h3");

// En dit is dan de For_of loop om "langs" ALLE H2 elementen te gaan, en in 1 klap de tekstinhoud te wijzigen!
for (items of subkopjes) {
	items.innerHTML = "Jongen";
}
// je kunt ooks door items heen "loopen" en ALLEEN SPECIFIEKE items wijzigen als je dat wilt:
for (items of subkopjes) {
	subkopjes[3].innerHTML = "Dit is een Meisje";
}
// Je kunt ook langs HTML objecten "loopen" die dezelfde CSS classes hebben, bijvoorbeeld alle HTML objecten met de CSS class "blokjes"

let vierkantjes = document.querySelectorAll(".blokjes");
for (item of vierkantjes) {
	item.style.cssText = "background:red";
}

// Je kan ook SPECIFIEKE objecten uit een reeks items selecteren en wijzigen! Zie hieronder:
let cirkels = document.querySelectorAll(".balletjes");
for (items of cirkels) {
	cirkels[2].style.cssText = "background:purple";
}

// =======================
// INCREMENTAL LOOP!
//========================
// Met de for-of loop manipuleer je dus reeds bestaande HTML elementen. Moet je echter vanuit het niets nieuwe elementen creeren, gebruik dan de incremental loop! Bijvoorbeeld: zet ergens 12 boompjes neer:

for (index = 0; index < 12; index++) {
	let boompje = document.createElement("section");
	boompje.classList.add("groene_driehoek");
	document.querySelector("#landschap").appendChild(boompje);
}

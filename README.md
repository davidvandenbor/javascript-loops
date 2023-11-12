# JavaScript Loops
- **Incremental loop:** Nieuwe HTML elementen **uit het niets creëren** met loops!
- **For_of loop:** Door reeds bestaande HTML elementen "loopen" met loops om ze te wijzigen!

## Voorbeeld bestanden
Bestanden **downloaden** naar je laptop? [Klik hier](https://github.com/CMD-Groningen/javascript-loops/archive/refs/heads/master.zip)     
Preview in de browser? [Klik hier](https://cmd-groningen.github.io/javascript-loops)  
Speel live met deze code in **CodeSandbox** > [Klik hier!](https://codesandbox.io/s/github/CMD-Groningen/javascript-loops) 

## For_of loop

Gebruik de for-of loop om REEDS BESTAANDE HTML objecten te selecteren, zodat je door hen heen kan "loopen" om ze allemaal te wijzigen! Hier bijvoorbeeld "loopen" we langs ALLE H2 elementen om de tekstjes ervan te veranderen. Eerst maken we een variabele waarin we alle H2 elementen van je pagina of website mee selecteren:

```JavaScript
var subkopjes = document.querySelectorAll("h2");
```

En dit is dan de For_of loop om "langs" ALLE H2 elementen te gaan, en in 1 klap de tekstinhoud te wijzigen!

```JavaScript
for (items of subkopjes) {
	items.innerHTML = "Jongens";
}
```

## Alleen SOMMIGE items wijzigen

je kunt ooks langs item loopen en ALLEEN SPECIFIEKE items wijzigen als je dat wilt. Hier pakken we de 4e H2 uit de loop en veranderen **alleen daarvan** de tekst:

```JavaScript
for (items of subkopjes) {
	subkopjes[3].innerHTML = "Dit is een Meisje";
}
```

## Langs elementen "loopen" met dezelfde CSS classes

Je kunt ook door HTML objecten heen "loopen" die dezelfde CSS classes hebben, bijvoorbeeld alle HTML objecten met de CSS class "blokjes". Hieronder maken we ze **allemaal** in 1 klap rood!

```JavaScript
let vierkantjes = document.querySelectorAll(".blokjes");
for (item of vierkantjes) {
	item.style.cssText = "background:red";
}
```

Je kan ook SPECIFIEKE items selecteren en wijzigen! Bijvoorbeeld langs alle cirkels "loopen" om de 3e cirkel paars te maken. We plakken rechtstreeks CSS code erop. Zie hieronder:

```JavaScript
let cirkels = document.querySelectorAll(".balletjes");
for (items of cirkels) {
	cirkels[2].style.cssText = "background:purple";
}
```

## Incremental loop

Met de for-of loop manipuleer je dus reeds bestaande HTML elementen. Moet je echter **vanuit het niets nieuwe elementen** creeren, gebruik dan de incremental loop! Bijvoorbeeld:

**Zet op een bepaalde plek 12 boompjes neer:**

```JavaScript
for (index = 0; index < 12; index++) {
let boompje = document.createElement("section");
boompje.classList.add("groene_driehoek");
document.querySelector("#landschap").appendChild(boompje);
}
```


// JavaScript Document
console.log("hi");

// Selecteer de een-na-laatste button binnen de header
var menuButton = document.querySelector('header button:nth-of-type(1)');
console.log(menuButton);

// Selecteer de nav
var menuNav = document.querySelector ("header nav:nth-of-type(1)");
console.log(menuNav);

menuButton.addEventListener("click", openMenu);

function openMenu() {
    menuNav.classList.add("actief");
    console.log("menu is open");
    menuButton.style.display = "none"; // Verberg menuButton
    menuCloseButton.style.display = "block"; // Toon menuCloseButton
    
}

/// Navigatie menu sluiten ///
var menuCloseButton = document.querySelector ("header button:nth-of-type(2)");
console.log(menuCloseButton);

menuCloseButton.addEventListener("click", closeMenu);


function closeMenu() {
    menuNav.classList.remove("actief")
    console.log("menu is gesloten");
    menuCloseButton.style.display = "none"; // Verberg menuCloseButton
    menuButton.style.display = "block"; // Toon menuButton
}
//aangeven hoeveelheid producten
var aantalMinder = document.querySelector('#aantalMinder');
var aantalMeer = document.querySelector('#aantalMeer');
var aantalProducten = document.querySelector('#aantal');

// begin toestand 
var aantal = 1; // het aantal begint op 1

// aantalProducten update functie
function updateScore(erbij = 1) {
    console.log('update score: ' + erbij);
    aantal = Math.max(0, aantal + erbij); // voorkomt dat aantal negatief wordt
    aantalProducten.textContent = aantal;
}

// eventHandler functies
function aantalErbij() {
    console.log('doe er een punt bij');
    updateScore(1);
}

function aantalEraf() {
    console.log('doe er een punt af');
    updateScore(-1);
}

// eventListeners op de knoppen
aantalMeer.addEventListener('click', aantalErbij);
aantalMinder.addEventListener('click', aantalEraf);

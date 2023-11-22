
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

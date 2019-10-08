/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav
const sects  = document.getElementsByTagName('section');
const navbar = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

for(sec of sects) {
	const nav = document.createElement('li');
	nav.textContent = sec.getAttribute('data-nav');
	nav.className = 'menu__link'; 
	fragment.appendChild(nav);
}

navbar.appendChild(fragment);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



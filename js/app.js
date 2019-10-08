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

// build the navigation items
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


// add class 'active' to section when near top of viewport


// scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// build menu 

// scroll to section on link click

// set sections as active



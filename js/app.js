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
const navbar = document.getElementById('navbar__list');		// emmpty navbar to be added items
const sects  = document.getElementsByTagName('section');	// all available sections on page

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(element) {

	const pos = element.getBoundingClientRect();

	if( pos.top >= 0 && pos.left >= 0 &&
		pos.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		pos.left  <= (window.innerWidth  || document.documentElement.clientWidth))
		return true;
	else
		return false;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// builds the navigation items
function buildNav() {

	const fragment = document.createDocumentFragment();

	for(sect of sects) {
		const nav = document.createElement('li');
		nav.textContent = sect.getAttribute('data-nav');

		// also stores the id as the classname for future ref
		nav.className = `menu__link ${sect.id}`;
		fragment.appendChild(nav);
	}

	navbar.appendChild(fragment);	
}


// adds class 'active' to section when near top of viewport
function setActive() {

	for(sect of sects) {
		
		if(isInViewport(sect)) {
			//sect.className = 'active';
			console.log(`${sect.id} is active`);
		} else {
			//sect.className = '';
		}

	}
}

// scrolls to anchor ID using scrollTO event
function scrollToSect(event) {

	if(event.target && event.target.nodeName == "LI") {
		const clicked = event.target.classList.item(1);
		document.getElementById(clicked).scrollIntoView();
	}
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

buildNav();

// scrolls to section on link click
navbar.addEventListener('click', scrollToSect);

// checks which sections are active on scroll
window.addEventListener("scroll", setActive);


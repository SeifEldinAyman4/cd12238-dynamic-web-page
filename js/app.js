const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const sectionNav = section.getAttribute('data-nav');
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.classList.add('menu__link');
    anchor.href = `#${sectionId}`;
    anchor.textContent = sectionNav;
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
    listItem.appendChild(anchor);
    navbarList.appendChild(listItem);
});

// Return section position
function getSectionPosition(section) {
    return section.getBoundingClientRect();
}

// Returns whether section is in view using || if top or bottom is visible to ensure unskippable visibility
function isSectionInView(position) {
    const windowHeight = window.innerHeight;
    // TOP/BOTTOM Visiblity
    const topVisible = position.top >= 0 && position.top < windowHeight;
    const bottomVisible = position.bottom > 0 && position.bottom <= windowHeight;

    return topVisible || bottomVisible;
}

// Toggles Active class based on visible section
// Parameters: current section, isActive boolean value that checks if the current position matches section's
function toggleActiveClass(section, isActive) {
    // Removes current active class if active (on scrolling) and vice versa
    if (isActive) {
        section.classList.add('active');
    } else {
        section.classList.remove('active');
    }
}

// RUN AFTER SCROLL
function checkSections() {
    sections.forEach(section => {
        // Gets section position using getSectionPosition()
        // Checks whether active by passing position into isSectionInView()
        const position = getSectionPosition(section);
        const isActive = isSectionInView(position);
        // Calls for toggleActiveClass() to achieve final result (adding/removing Active class)
        toggleActiveClass(section, isActive);
    });
}

// Event listener for scrolling
window.addEventListener('scroll', checkSections);
// Runs upon scroll
checkSections();
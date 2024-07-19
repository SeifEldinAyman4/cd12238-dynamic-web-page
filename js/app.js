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

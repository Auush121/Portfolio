document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var sections = document.querySelectorAll('section');
    var scrollPos = window.scrollY + window.innerHeight / 2; // Check halfway into the viewport

    // Remove all section-specific border classes
    navbar.classList.remove('home-border', 'about-border', 'projects-border', 'contact-border');
    navbar.classList.add('no-border'); // Set default no-border class

    let activeSection = '';

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            activeSection = section.id; // Set the active section id
        }
    });

    // Apply the border class based on the active section if scrolling
    if (activeSection) {
        navbar.classList.remove('no-border');
        navbar.classList.add(`${activeSection}-border`);
    }
});

// Optional: Handle scroll stop to remove border color
let isScrolling;
window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        document.querySelector('.navbar').classList.add('no-border');
    }, 100); // Adjust timeout as needed
});

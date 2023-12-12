document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('min1').addEventListener('click', function () {
        toggleSection('section1');
    });

    document.getElementById('min2').addEventListener('click', function () {
        toggleSection('section2');
    });

    document.getElementById('min3').addEventListener('click', function () {
        toggleSection('section3');
    });

    document.getElementById('min4').addEventListener('click', function () {
        toggleSection('section4');
    });

    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.classList.toggle('minimized');

    document.getElementById('sections-container').style.height = 'auto';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    var navOffset = nav.offsetTop;

    function handleScroll() {
        if (window.pageYOffset > navOffset) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
    }

    // Adiciona um ouvinte de rolagem
    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('active');
    });

    const menuLinks = document.querySelectorAll('.menu ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
});


const burger = document.getElementById('hamburger-menu');

burger.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
})
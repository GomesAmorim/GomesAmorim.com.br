let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.remove("bx-menu")
    navbar.classList.toggle('active')
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active');
        menuIcon.classList.toggle('bx-menu');
    };
});

document.addEventListener('click', (e) => {
    const clickedInsideMenu = navbar.contains(e.target);
    const clickedMenuIcon = menuIcon.contains(e.target);

    if (!clickedInsideMenu && !clickedMenuIcon) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
});
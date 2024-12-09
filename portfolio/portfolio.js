/* let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}; */
function toggleMenu() {
    var navLink = document.getElementById("navLinks");
    if (navLink.style.display === "block") {
        navLink.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}
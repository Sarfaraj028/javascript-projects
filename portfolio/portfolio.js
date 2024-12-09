
// active nav bar
const navLinks = document.querySelectorAll('li a');
console.log(navLinks);

// Loop through each link and add event listener
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});


function toggleMenu() {
    var navLink = document.getElementById("navLinks");
    if (navLink.style.display === "block") {
        navLink.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}
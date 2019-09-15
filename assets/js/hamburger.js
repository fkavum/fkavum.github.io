// Hamburger Menu
let toggleButton = document.getElementsByClassName('hamburger-button')[0];
const navbarTabs = document.getElementsByClassName('navbar-tabs')[0];
console.log(navbarTabs);

toggleButton.addEventListener('click', () => {
    navbarTabs.classList.toggle('hamburger-active');
});

window.addEventListener('click', function (e) {
    if (navbarTabs.classList.contains('hamburger-active')) {
        if (navbarTabs.contains(e.target) || toggleButton.contains(e.target)) {
            this.console.log('divdeyim');
        } else {
            navbarTabs.classList.toggle('hamburger-active');
        }
    }
});
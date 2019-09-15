// Shrink the navbar
let nav = document.querySelector('.main-nav');
let brandName = document.querySelector('.brand-name');
let brandTitle = document.querySelector('.brand-title');
let socialMed = document.querySelector('.social-med');
let position = 0;

window.addEventListener('scroll', function () {
    //console.log(position);
    if (position < window.pageYOffset + 1) {
        position = window.pageYOffset;

        if (window.pageYOffset < 1) {
            bigNav();
        } else if (window.pageYOffset < 400) {
            smallNav();
        } else {
            closeNav();
        }
    } else {
        position = window.pageYOffset;

        if (window.pageYOffset < 1) {
            bigNav();
        } else if (window.pageYOffset < 400) {
            smallNav();
        } else {
            smallNav();
        }
    }
});

function bigNav() {
    nav.classList = 'main-nav';
    brandName.classList = 'brand-name';
    brandTitle.classList = 'brand-title'
    socialMed.classList = 'social-med';
}

function smallNav() {
    nav.classList = 'main-nav small-nav';
    brandName.classList = 'brand-name small-brand-name';
    brandTitle.classList = 'brand-title small-brand-title';
    socialMed.classList = 'social-med up';
}

function closeNav() {
    nav.classList = 'main-nav small-nav up';
}
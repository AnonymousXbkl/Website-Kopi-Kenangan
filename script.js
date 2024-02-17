// Toggle Class Active
const navbarNav = document.querySelector ('.navbar-nav');
    document.querySelector('#hamburger-menu').onclick = () => {
        navbarNav.classList.toggle('active');
    };



// Click di luar sidebar untuk hilangkan Nav
const hamburger = document.querySelector ('#hamburger-menu');
const sb = document.querySelector ('#search-box');
    document.addEventListener ('click', function (e) {
        if (!hamburger.contains(e.target) && !navbarNav.contains (e.target)) {
            navbarNav.classList.remove ('active');
        };
        if (!sb.contains(e.target) && !searchForm.contains (e.target) && !searchBtn.contains (e.target)) {
            searchForm.classList.remove ('active');
        };
        e.preventDefault ();
    });



// Click Tombol Search di Navbar
const searchForm = document.querySelector ('.search-form');
const searchBox = document.querySelector ('#search-box');
const searchBtn = document.querySelector ('#search-button')
    searchBtn.addEventListener ('click', function (e) {

        searchForm.classList.toggle ('active');
        searchBox.focus ();
        e.preventDefault ();
    
    });

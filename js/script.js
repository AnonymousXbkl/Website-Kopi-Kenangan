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

// Shopping Cart
const shoppingCartButton = document.querySelector ('#shopping-cart-button')
const shoppingCart = document.querySelector ('.shopping-cart')
    document.addEventListener('click', function(e) {
        if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
            shoppingCart.classList.remove ('active')
        }
    });
        shoppingCartButton.addEventListener ('click', function (e) {
            shoppingCart.classList.toggle ('active');
            e.preventDefault ();
    });

// Item Detail Modal
const itemDetailModal = document.querySelector ('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll ('.item-detail-button');
    for (i = 0; i < itemDetailButtons.length; i++) {
        itemDetailButtons[i].addEventListener ('click', function (e) {
            itemDetailModal.style.display = 'flex'
            e.preventDefault ();
        })
    }
    window.addEventListener ('click', function (e) {
        if (e.target === itemDetailModal) {
            itemDetailModal.style.display = 'none';
        };
    });


// Close Item Detail Modal
const closeItemDetail = document.querySelector ('.modal .close-icon');
    closeItemDetail.addEventListener ('click', function (e) {
        itemDetailModal.style.display = 'none';
        e.preventDefault ();
    })

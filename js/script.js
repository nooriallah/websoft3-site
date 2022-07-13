
var loginPage = document.querySelector(".login-page");
var btnLogin = document.querySelector("#btn-login");
var searchPage = document.querySelector(".search-page");
var btnSearch = document.querySelector("#btn-search");

// Open and close of login page and search page
var x = 1;
btnLogin.addEventListener('click', function () {
    x++;
    if (x % 2 == 0) {
        loginPage.classList.add("active");
        btnLogin.innerHTML = "X";
    }
    else {
        loginPage.classList.remove("active");
        btnLogin.innerHTML = "<i class='fa fa-user-alt'></i>";
        x = 1;
    }
});
// search page 
btnSearch.addEventListener('click', function () {
    x++;
    if (x % 2 == 0) {
        searchPage.classList.add("active");
        btnSearch.innerHTML = "X";
    }
    else {
        searchPage.classList.remove("active");
        btnSearch.innerHTML = '<i class="fas fa-search"></i>';
        x = 1;
    }
});


window.onscroll = () => {
    // login page 
    loginPage.classList.remove("active");
    btnLogin.innerHTML = "Sign-in <i class='fa fa-user-alt'></i>";
    // search page 
    searchPage.classList.remove("active");
    btnSearch.innerHTML = '<i class="fas fa-search"></i>';

    x = 1;
}


// slider 1
$('#slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// slider 2
$('#slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

// slider 3
$('#slider3').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});



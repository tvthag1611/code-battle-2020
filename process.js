window.onscroll = function() {myFunction()};

function myFunction() {
    const navbar = document.getElementById("myNavbar");
    const scrollUp = document.getElementById("scrollUp");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.className = "navbar" + " navbar-fixed" + " slide-top";
        scrollUp.className = "scroll-up" + " animate__animated animate__slideInUp";
    }
    else {
        navbar.className = navbar.className.replace(" navbar-fixed slide-top", "");
        scrollUp.className = "display-none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function navFunction() {
    const navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    }
    else if (navbar.className === "navbar navbar-fixed slide-top") {
        navbar.className += " responsive-fixed";
    }
    else if (navbar.className === "navbar navbar-fixed slide-top responsive-fixed") {
        navbar.className = "navbar navbar-fixed slide-top";
    }
    else {
        navbar.className = "navbar";
    }
}

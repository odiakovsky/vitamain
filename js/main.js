
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav h3');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElem = document.querySelector(targetId);
            var offsetTop = targetElem.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-mobile h3');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElem = document.querySelector(targetId);
            var offsetTop = targetElem.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});



const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav-mobile");
const krest = document.querySelector(".krest");

burger.addEventListener("click", () => {
    navMobile.classList.toggle("active");
});

krest.addEventListener("click", () => {
    navMobile.classList.remove("active");
    burger.style.display = "flex";
});



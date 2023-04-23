//Прокрутка к объекту
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav h3');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElem = document.querySelector(targetId);
        var elemHeight = targetElem.offsetHeight;
        var windowHeight = window.innerHeight;
        var offsetTop = targetElem.offsetTop - (windowHeight - elemHeight) / 2;
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
        var elemHeight = targetElem.offsetHeight;
        var windowHeight = window.innerHeight;
        var offsetTop = targetElem.offsetTop - (windowHeight - elemHeight) / 2;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Дополнительный отступ сверху для компенсации высоты фиксированного меню
  window.addEventListener('load', function () {
    var scrollPaddingTop = document.querySelector('.nav').offsetHeight;
    document.body.style.scrollPaddingTop = scrollPaddingTop + 'px';
  });
  //Прокрутка к объекту


//Бургер-меню
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
//Бургер-меню

//Проверка подлинности
const searchButton = document.getElementById("search-button");
    const numberInput = document.getElementById("number-input");
    const nameProduct = document.querySelector(".name-product");
    const checkOk = document.querySelector(".check-ok");
    const checkFake = document.querySelector(".check-fake");

    searchButton.addEventListener("click", function () {
        const number = numberInput.value;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "csv/check.csv");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const lines = xhr.responseText.split("\n");
                for (let i = 0; i < lines.length; i++) {
                    const columns = lines[i].split(";");
                    if (columns[0] === number) {
                        nameProduct.innerText = columns[1];
                        checkOk.style.display = "block";
                        checkFake.style.display = "none";
                        return;
                    }
                }
                checkOk.style.display = "none";
                checkFake.style.display = "block";
            }
        };
        xhr.send();
    });
//Проверка подлинности

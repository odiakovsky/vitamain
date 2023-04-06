document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav h3');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
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
  
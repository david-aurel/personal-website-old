(function() {
    var pages = document.querySelectorAll('.page');
    var nav = document.querySelector('nav');
    var navElems = document.querySelectorAll('nav p');
    nav.addEventListener('click', function(e) {
        pages.forEach(function(elem) {
            elem.classList.remove('show');
        });
        for (var i = 0; i < navElems.length; i++) {
            if (e.target == navElems[i]) {
                pages[i].classList.add('show');
            }
            navElems[i].classList.remove('active');
        }
        e.target.classList.toggle('active');
    });
})();

(function() {
    var pages = document.querySelectorAll('.page');
    var nav = document.querySelector('nav');
    var navElems = document.querySelectorAll('nav p');
    navElems.forEach(function(elem) {
        elem.addEventListener('click', function(e) {
            pages.forEach(function(elem) {
                elem.classList.remove('show');
            });
            navElems.forEach(function(elem) {
                elem.classList.remove('active');
            });

            for (var i = 0; i < navElems.length; i++) {
                if (e.target == navElems[i]) {
                    pages[i].classList.add('show');
                }
            }
            e.target.classList.add('active');
        });
    });
})();

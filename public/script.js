(function() {
    var pages = document.querySelectorAll('.page');
    var nav = document.querySelector('nav');
    var navElems = document.querySelectorAll('.navLinks div');
    var slider = document.querySelector('.slider');

    nav.addEventListener('click', function(e) {
        pages.forEach(function(elem) {
            elem.classList.remove('show');
        });
        for (var i = 0; i < navElems.length; i++) {
            if (e.target == navElems[i]) {
                pages[i].classList.add('show');
            }
        }

        var sliderLeft;
        switch (e.target) {
            case navElems[0]:
                sliderLeft = '0%';
                break;
            case navElems[1]:
                sliderLeft = '39%';
                break;
            case navElems[2]:
                sliderLeft = '76%';
                break;
        }
        slider.style.marginLeft = sliderLeft;
    });
})();

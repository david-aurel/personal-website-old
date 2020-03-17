document.addEventListener('DOMContentLoaded', function() {
    // querying the dom
    var navElems = document.querySelectorAll('.navLink');
    var slider = document.querySelector('.slider');
    var content = document.querySelector('#contentWrapper');
    var backIcon = document.querySelector('.icon img:first-of-type');
    var forwardIcon = document.querySelector('.icon img:last-of-type');
    var portfolioFirst = document.querySelector('.portfolio-element');
    var portfolioElems = document.querySelectorAll('.portfolio-element');

    // navbar sliding
    function navBarSlide(e) {
        var sliderPos;
        var contentPos;
        switch (e.target) {
            case navElems[0]:
                sliderPos = '0%';
                contentPos = '0%';
                break;
            case navElems[1]:
                sliderPos = '39%';
                contentPos = '-33.34%';
                break;
            case navElems[2]:
                sliderPos = '76%';
                contentPos = '-66.67%';
                break;
        }
        slider.style.marginLeft = sliderPos;
        content.style.transform = 'translateX(' + contentPos + ')';
    }

    // show the first portfolio page
    portfolioFirst.classList.add('show-portfolio-element');

    // portfolio sliding
    document.addEventListener('click', function(e) {
        if (e.target.name == 'forward') {
            portfolioSlide('forward');
        }
        if (e.target.name == 'back') {
            portfolioSlide('back');
        }
        if (e.target.classList == 'navLink') {
            navBarSlide(e);
        }
    });

    // portfolio UX
    function portfolioSlide(direction) {
        var currentShow = document.querySelector('.portfolio .show');
        var l = portfolioElems.length;

        if (direction == 'back') {
            var dir = -1;
            var slideOut = 'portfolio-slide-out-right';
            var slideIn = 'portfolio-slide-in-left';
        } else {
            var dir = 1;
            var slideOut = 'portfolio-slide-out-left';
            var slideIn = 'portfolio-slide-in-right';
        }

        for (var i = 0; i < l; i++) {
            if (
                portfolioElems[i].classList.contains('show-portfolio-element')
            ) {
                var idx = i + dir;
                if (i == l - 1 && dir == 1) {
                    idx = 0;
                } else if (i == 0 && dir == -1) {
                    idx = l - 1;
                }
                portfolioElems[idx].classList.add(slideIn);
                portfolioElems[idx].addEventListener(
                    'animationend',
                    function() {
                        this.classList.remove(slideIn);
                        this.classList.add('show-portfolio-element');
                    }
                );
                portfolioElems[i].classList.add(slideOut);
                portfolioElems[i].addEventListener('animationend', function() {
                    this.classList.remove(slideOut, 'show-portfolio-element');
                });
                break;
            }
        }
    }
});

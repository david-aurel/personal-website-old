(function() {
    // handlebars boilerplate compiler
    Handlebars.templates = Handlebars.templates || {};
    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );
    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    // ////////////////////////////////////

    // querying the dom
    var pages = document.querySelectorAll('.page');
    var nav = document.querySelector('nav');
    var navElems = document.querySelectorAll('.navLink');
    var slider = document.querySelector('.slider');
    var content = document.querySelector('#contentWrapper');
    var portfolio = document.querySelector('.portfolio-element-wrapper');
    var backIcon = document.querySelector('.icon img:first-of-type');
    var forwardIcon = document.querySelector('.icon img:last-of-type');
    var icon = document.querySelector('.icon');
    var contactCard = document.querySelector('.contact-card');
    var aboutMe = document.querySelector('.about-me');

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

    // getting information displayed (axios to get data, then handlebars rendering)
    axios.get('/data.json').then(function(response) {
        var data = response.data;
        // portfolio
        portfolio.innerHTML =
            portfolio.innerHTML + Handlebars.templates.portfolio(data);
        var portfolioFirst = document
            .querySelector('.portfolio-element')
            .classList.add('show-portfolio-element');

        // contact-card
        contactCard.innerHTML = Handlebars.templates.contactCard(data);

        // about-me
        aboutMe.innerHTML = Handlebars.templates.aboutMe(data);
    });

    // contact me post request

    // portfolio UX
    function portfolioSlide(direction) {
        var portfolioElems = document.querySelectorAll('.portfolio-element');
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
})();

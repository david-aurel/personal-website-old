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
    var portfolio = document.querySelector('.portfolio');
    var backIcon = document.querySelector('.icon img:first-of-type');
    var forwardIcon = document.querySelector('.icon img:last-of-type');
    var icon = document.querySelector('.icon');

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
    // portfolio
    axios.get('/portfolio.json').then(function(response) {
        var data = response.data;
        portfolio.innerHTML =
            portfolio.innerHTML + Handlebars.templates.hello(data);
        var portfolioFirst = document
            .querySelector('.portfolio-element')
            .classList.add('show');
    });

    function portfolioSlide(direction) {
        var portfolioElems = document.querySelectorAll('.portfolio-element');
        var currentShow = document.querySelector('.portfolio .show');
        var l = portfolioElems.length;

        if (direction == 'back') {
            var dir = -1;
        } else {
            var dir = 1;
        }

        for (var i = 0; i < l; i++) {
            if (portfolioElems[i].classList.contains('show')) {
                var idx = i + dir;
                console.log('length:', l, 'i:', i, 'dir:', dir, 'idx:', idx);
                if (i == l - 1 && dir == 1) {
                    idx = 0;
                } else if (i == 0 && dir == -1) {
                    idx = l - 1;
                }
                portfolioElems[idx].classList.add('show');
                portfolioElems[i].classList.remove('show');
                break;
            }
        }
    }
})();

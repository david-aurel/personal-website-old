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

    // navbar sliding
    nav.addEventListener('click', function(e) {
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
    });

    // render portfolio content
    axios.get('/portfolio.json').then(function(response) {
        var data = response.data;
        portfolio.innerHTML = Handlebars.templates.hello(data);
    });
})();

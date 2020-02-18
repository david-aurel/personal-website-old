(function() {
    var pages = document.querySelectorAll('.page');
    var nav = document.querySelector('nav');
    var navElems = document.querySelectorAll('.navLink');
    var slider = document.querySelector('.slider');
    var content = document.querySelector('#contentWrapper');

    nav.addEventListener('click', function(e) {
        // pages.forEach(function(elem) {});
        // for (var i = 0; i < navElems.length; i++) {
        //     if (e.target == navElems[i]) {
        //         document.querySelector('.show').classList.remove('show');
        //         pages[i].classList.add('show');
        //     }
        // }
        // var position = e.target.getAttribute('data-pos');
        // var translateValue = translateX(position);

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
        content.style.transform = `translateX(${contentPos})`;
    });
})();

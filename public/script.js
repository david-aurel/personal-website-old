(function() {
    var fishingLine = document.querySelector('.fishing-line');
    var arm = document.querySelector('.arm');
    console.log(arm);

    // window.onmousemove = mouseMove;

    function mouseMove(e) {
        // fishingLine.style.top = e.clientY + 'px';
        // fishingLine.style.width = e.clientX + 'px';
        console.log(arm.offsetLeft);
    }
})();

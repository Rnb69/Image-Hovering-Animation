var elem = document.querySelectorAll('.elem');

elem.forEach((val) => {
    val.addEventListener('mousemove', (event) => {
        val.childNodes[3].style.left =  event.x + 'px';
        val.childNodes[3].style.top =  event.y + 'px';
    })
    val.addEventListener('mouseleave', () => {
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener('mouseenter', () => {
        val.childNodes[3].style.opacity = 1;
    })
})
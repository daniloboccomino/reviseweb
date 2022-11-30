window.onscroll = function () {
    const header_navbar = document.querySelector('header')
    const sticky = header_navbar.offsetTop

    if (window.pageYOffset > 0) {
        header_navbar.classList.add('sticky')
        if (window.pageYOffset > 50) {
            header_navbar.classList.add('sticky-bg');
        } else {
            header_navbar.classList.remove('sticky-bg');
        }
    } else {
        header_navbar.classList.remove('sticky')
    }
}
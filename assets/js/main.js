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

document.querySelectorAll('.toggleNav').forEach(nav => nav.addEventListener('click', () => {
    btnNav = document.querySelector('.navbar-toggler')
    if (!window.matchMedia('(min-width: 992px)').matches) {
        if (btnNav.classList.contains('collapsed')) {
            btnNav.classList.remove('collapsed')
            btnNav.setAttribute('aria-expanded', true)
            document.querySelector('#navbarResponsive').classList.add('show')
        } else {
            btnNav.classList.add('collapsed')
            btnNav.setAttribute('aria-expanded', false)
            document.querySelector('#navbarResponsive').classList.remove('show')
        }
    }
}))
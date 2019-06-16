window.onload = () => {
    //slide in menu
    const menu = document.querySelector('.nav_link--menu');
    const navMobile = document.querySelector('.nav--mobile');
    const container = document.body;
    function menuClicked(e) {
        if (![...this.classList].includes('nav_link--menu--clicked')) {
            this.classList.add('nav_link--menu--clicked');
            navMobile.classList.add('nav--active');
            navMobile.style.top = `${e.pageY}px`;
            container.classList.add('container--menu');
        }
        else {
            this.classList.remove('nav_link--menu--clicked');
            navMobile.classList.remove('nav--active');
            container.classList.remove('container--menu');
        }
    }
    menu.addEventListener('click', menuClicked);

    new Glider(document.querySelector('.work_glider'), {
        slidesToShow: 1,
        dots: '.dots',
        scrollLock: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

    const sections = document.querySelectorAll('.sec');

    const sectionsEnd = [...sections].map(section => section.offsetTop + section.clientHeight);
    const links = [...document.querySelectorAll('.nav--side .nav_link .nav_a')];


    window.addEventListener('scroll', debounce(watchCurrentSection));

    function watchCurrentSection() {
        for (let [index, end] of sectionsEnd.entries()) {
            if (end * 2 / 3 > window.scrollY) {
                links.forEach(link => link.classList.remove('current'));
                links[index].classList.add('current');
                break;
            }
        }
    }

    function debounce(func, wait = 12, immediate = true) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
}

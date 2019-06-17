window.onload = () => {
    //slide in menu
    const contactButton = document.querySelector('.contactForm_button');

    const contactInputs = [...document.querySelectorAll('.contactForm_input')];
    const exitButton = document.querySelector('.contact_formInProgressExit');
    const menu = document.querySelector('.nav_link--menu');
    const navMobile = document.querySelector('.nav--mobile');
    const linksMobile = document.querySelectorAll('.nav_links--mobile .nav_link');
    const container = document.body;
    function menuClicked(e) {
        if (e.target.classList.contains('nav_a')) {
            menu.classList.remove('nav_link--menu--clicked');
            navMobile.classList.remove('nav--active');
            container.classList.remove('container--menu');
            return;
        }
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
    console.log(linksMobile);
    linksMobile.forEach(link => link.addEventListener('click', menuClicked));
    contactButton.addEventListener('click', showInfo);
    contactInputs.forEach(input => input.addEventListener('click', showInfo));
    exitButton.addEventListener('click', hideInfo);

    function showInfo() {
        const form = document.querySelector('.contactForm');
        const alert = document.querySelector('.contact_formInProgress');
        alert.style.display = 'flex';
        alert.style.top = `${window.pageYOffset}px`;
        form.reset();
    }

    function hideInfo() {
        const alert = document.querySelector('.contact_formInProgress');
        alert.style.display = 'none';
    }

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

    watchCurrentSection()
    window.addEventListener('scroll', debounce(watchCurrentSection));

    function watchCurrentSection() {
        for (let [index, end] of sectionsEnd.entries()) {
            if (end * 2 / 3 > window.scrollY) {
                links.forEach(link => link.classList.remove('current'));
                links[index].classList.add('current');
                const highlight = document.querySelector('.nav_currentLink');
                highlight.style.top = `${links[index].offsetTop}px`;
                highlight.style.height = `${links[index].offsetHeight}px`;
                break;
            }
        }
    }

    function debounce(func, wait = 13, immediate = true) {
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

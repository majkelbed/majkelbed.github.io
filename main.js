window.onload = () => {
    //slide in menu
    const menu = document.querySelector('.nav_link--menu');
    const navMobile = document.querySelector('.nav--mobile');
    const containter = document.body;
    function menuClicked(e) {
        if (![...this.classList].includes('nav_link--menu--clicked')) {
            this.classList.add('nav_link--menu--clicked');
            navMobile.classList.add('nav--active');
            navMobile.style.top = `${e.pageY}px`;
            containter.classList.add('container--menu');
        }
        else {
            this.classList.remove('nav_link--menu--clicked');
            navMobile.classList.remove('nav--active');
            containter.classList.remove('container--menu');
        }
    }
    menu.addEventListener('click', menuClicked);

    new Glider(document.querySelector('.work_glider'), {
        slidesToShow: 1,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
}

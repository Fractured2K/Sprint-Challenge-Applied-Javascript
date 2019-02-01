class Carousel {
    constructor(carousel) {
        this.rightButton = carousel.querySelector('.right-button');
        this.leftButton = carousel.querySelector('.left-button');

        this.images = [...carousel.querySelectorAll('img')];

        this.currentIndex = 0;
        this.imagesLast = this.images[this.images.length - 1];
        this.images[this.currentIndex].style.display = 'block';

        [this.rightButton, this.leftButton].forEach(direction => {
            direction.addEventListener('click', e => this.direction(e));
        })
    }

    direction(e) {
        this.images.forEach(img => img.style.display = 'none');



        this.images[this.currentIndex].style.display = 'block'
    }

}

let carousel = new Carousel(document.querySelector('.carousel'));

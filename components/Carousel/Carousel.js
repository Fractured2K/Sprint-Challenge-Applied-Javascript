class Carousel {
    constructor(carousel) {
        this.rightButton = carousel.querySelector('.right-button');
        this.leftButton = carousel.querySelector('.left-button');

        this.images = [...carousel.querySelectorAll('img')];

        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = 'block';

        this.leftButton.addEventListener('click', () => this.left());
        this.rightButton.addEventListener('click', () => this.right());
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));
